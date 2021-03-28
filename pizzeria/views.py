from django.contrib.postgres.search import SearchVector, SearchQuery, \
    SearchRank
from django.db.models import Max, Min, Count
from django.core.paginator import Paginator
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView, ListView, DetailView
from django.utils.translation import gettext_lazy as _
from django_filters.views import FilterView

from Pizzeria_django.settings import DEFAULT_PAGINATE, PAGINATE_CHOICES, \
    ORDERINGS, DEFAULT_ORDERING
from pizzeria.filters import FoodFilter
from pizzeria.models import SiteSettings, MainPageSlide, Food, Category


class MainPage(TemplateView):
    """
    main page / index page
    """
    template_name = 'index.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        # add site_name
        site_name = SiteSettings.objects.first().site_name
        if site_name:
            context.update({'site_name': site_name})
        # add contact_email
        contact_email = SiteSettings.objects.first().contact_email
        if contact_email:
            context.update({'contact_email': contact_email})
        # add phone_number
        phone_number = SiteSettings.objects.first().phone_number
        if phone_number:
            context.update({'phone_number': phone_number})
        # add phone_number_two
        phone_number_two = SiteSettings.objects.first().phone_number_two
        if phone_number_two:
            context.update({'phone_number_two': phone_number_two})
        # add map_coordinates
        map_coordinates = SiteSettings.objects.first().map_coordinates
        if map_coordinates:
            context.update({'map_coordinates': map_coordinates})
        # add map_link
        map_link = SiteSettings.objects.first().map_link
        if map_link:
            context.update({'map_link': map_link})
        # add address
        address = SiteSettings.objects.first().address
        if address:
            context.update({'address': address})
        # add contact_about_text
        contact_about_text = SiteSettings.objects.first().contact_about_text
        if contact_about_text:
            context.update({'contact_about_text': contact_about_text})
        # add slides
        slides = MainPageSlide.objects.all()
        if slides:
            context.update({'slides': slides})
        # add welcome_title
        welcome_title = SiteSettings.objects.first().welcome_title
        if welcome_title:
            context.update({'welcome_title': welcome_title})
        # add welcome_text
        welcome_text = SiteSettings.objects.first().welcome_text
        if welcome_text:
            context.update({'welcome_text': welcome_text})
        # add working_time_text
        working_time_text = SiteSettings.objects.first().working_time_text
        if working_time_text:
            context.update({'working_time_text': working_time_text})
        # add saturday_work_start
        saturday_work_start = SiteSettings.objects.first().saturday_work_start
        if saturday_work_start:
            context.update({'saturday_work_start': saturday_work_start})
        # add saturday_work_finish
        saturday_work_finish = SiteSettings.objects.first().saturday_work_finish
        if saturday_work_finish:
            context.update({'saturday_work_finish': saturday_work_finish})
        # add sunday_work_start
        sunday_work_start = SiteSettings.objects.first().sunday_work_start
        if sunday_work_start:
            context.update({'sunday_work_start': sunday_work_start})
        # add sunday_work_finish
        sunday_work_finish = SiteSettings.objects.first().sunday_work_finish
        if sunday_work_finish:
            context.update({'sunday_work_finish': sunday_work_finish})
        # add weekday_work_start
        weekday_work_start = SiteSettings.objects.first().weekday_work_start
        if weekday_work_start:
            context.update({'weekday_work_start': weekday_work_start})
        # add weekday_work_finish
        weekday_work_finish = SiteSettings.objects.first().weekday_work_finish
        if weekday_work_finish:
            context.update({'weekday_work_finish': weekday_work_finish})
        # add menu_categories_text
        menu_categories_text = SiteSettings.objects.first().menu_categories_text
        if menu_categories_text:
            context.update({'menu_categories_text': menu_categories_text})
        # add categories
        categories = Category.objects.filter(is_on_front=True)[:6]
        if categories:
            context.update({'categories': categories})

        return context


class Shop(ListView):
    """
    shop catalog page
    """
    template_name = 'shop.html'
    model = Food
    paginate_by = DEFAULT_PAGINATE
    queryset = Food.objects.filter(is_active=True)

    context_object_name = 'food_list'
    price_limits = dict()
    food_count = 0

    def get_queryset(self):
        if self.request.GET.get('ipp'):
            self.paginate_by = self.request.GET.get('ipp')
        search_query = self.request.GET.get('q')

        try:
            price_limit_min = float(self.request.GET.get('from', 0))
            price_limit_max = float(self.request.GET.get('to', 0))
        except (TypeError, ValueError):
            price_limit_min = 0
            price_limit_max = 0


        qs = self.queryset.annotate(
            max_price_max=Max('price__value'),
            min_price_min=Min('price__value'),
            orders_count=Count('order_item'),
        )

        if self.request.GET.get('is_vegetarian'):
            qs = qs.filter(is_vegetarian=True)

        if self.request.GET.get('is_spicy'):
            qs = qs.filter(is_spicy=True)

        if self.request.GET.get('is_it_for_kids'):
            qs = qs.filter(is_it_for_kids=True)

        if search_query:
            search_query = SearchQuery(search_query)
            search_vector = SearchVector(
                'title_uk',
                'title_ru',
                'title_en',
                'category__title_ru',
                'category__title_uk',
                'category__title_en',
                'description_uk',
                'description_ru',
                'description_en',
            )
            qs = qs.annotate(
                search=search_vector,
                rank=SearchRank(search_vector, search_query)
            ).filter(search=search_query).order_by('-rank')

        self.price_limits = qs.aggregate(
            max_price=Max('price__value'),
            min_price=Min('price__value'),
        )
        self.price_limits.update(
            from_price=self.price_limits.get('min_price'),
            to_price=self.price_limits.get('max_price'),
        )

        if price_limit_min and price_limit_max:
            qs = qs.filter(
                max_price_max__gte=price_limit_min,
                min_price_min__lte=price_limit_max,
            )
            self.price_limits.update(
                from_price=price_limit_min,
                to_price=price_limit_max,
            )

        self.food_count = qs.count()

        ordering = self.request.GET.get('ordering', DEFAULT_ORDERING)
        if ordering not in ORDERINGS.keys():
            ordering = DEFAULT_ORDERING

        if not search_query:
            qs = qs.order_by(ordering)

        return qs

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        # add currency_symbol
        currency_symbol = SiteSettings.objects.first().currency_symbol
        if currency_symbol:
            context.update({'currency_symbol': currency_symbol})
        # add price_limits
        if self.price_limits:
            context.update({'price_limits': self.price_limits})
        # add foods_count
        context.update({'foods_count': self.food_count})
        context.update({'paginate_choices': PAGINATE_CHOICES})
        context.update({'paginate_default': DEFAULT_PAGINATE})
        context.update({'orderings': ORDERINGS})

        # add site_name
        site_name = SiteSettings.objects.first().site_name
        if site_name:
            context.update({'site_name': site_name})
        # add contact_email
        contact_email = SiteSettings.objects.first().contact_email
        if contact_email:
            context.update({'contact_email': contact_email})
        # add phone_number
        phone_number = SiteSettings.objects.first().phone_number
        if phone_number:
            context.update({'phone_number': phone_number})
        # add phone_number_two
        phone_number_two = SiteSettings.objects.first().phone_number_two
        if phone_number_two:
            context.update({'phone_number_two': phone_number_two})
        # add map_coordinates
        map_coordinates = SiteSettings.objects.first().map_coordinates
        if map_coordinates:
            context.update({'map_coordinates': map_coordinates})
        # add map_link
        map_link = SiteSettings.objects.first().map_link
        if map_link:
            context.update({'map_link': map_link})
        # add address
        address = SiteSettings.objects.first().address
        if address:
            context.update({'address': address})
        # add contact_about_text
        contact_about_text = SiteSettings.objects.first().contact_about_text
        if contact_about_text:
            context.update({'contact_about_text': contact_about_text})

        return context


class ShopCategoryDetailView(DetailView):
    """
    List of category foods
    """
    model = Category
    template_name = 'shop.html'

    def get_context_data(self, *, object_list=None, **kwargs):

        try:
            price_limit_min = float(self.request.GET.get('from', 0))
            price_limit_max = float(self.request.GET.get('to', 0))
        except (TypeError, ValueError):
            price_limit_min = 0
            price_limit_max = 0

        context = super().get_context_data(object_list=object_list, **kwargs)

        foods = self.get_object().foods.filter(is_active=True)

        foods = foods.annotate(
            max_price_max=Max('price__value'),
            min_price_min=Min('price__value'),
            orders_count=Count('order_item'),
        )

        if self.request.GET.get('is_vegetarian'):
            foods = foods.filter(is_vegetarian=True)

        if self.request.GET.get('is_spicy'):
            foods = foods.filter(is_spicy=True)

        if self.request.GET.get('is_it_for_kids'):
            foods = foods.filter(is_it_for_kids=True)

        price_limits = foods.aggregate(
            max_price=Max('price__value'),
            min_price=Min('price__value')
        )
        price_limits.update(
            from_price=price_limits.get('min_price'),
            to_price=price_limits.get('max_price'),
        )

        if price_limit_min and price_limit_max:
            foods = foods.filter(
                max_price_max__gte=price_limit_min,
                min_price_min__lte=price_limit_max,
            )
            price_limits.update(
                from_price=price_limit_min,
                to_price=price_limit_max,
            )

        # Order by
        ordering = self.request.GET.get('ordering', DEFAULT_ORDERING)

        if ordering not in ORDERINGS.keys():
            ordering = DEFAULT_ORDERING

        foods = foods.order_by(ordering)

        # item per page and paginator
        ipp = self.request.GET.get('ipp', DEFAULT_PAGINATE)
        paginator = Paginator(foods, ipp)
        page = self.request.GET.get('page', 1)

        context.update({'food_list': paginator.get_page(page)})
        context.update({'price_limits': price_limits})
        context.update({'paginate_choices': PAGINATE_CHOICES})
        context.update({'paginate_default': DEFAULT_PAGINATE})
        context.update({'orderings': ORDERINGS})

        # add site_name
        site_name = SiteSettings.objects.first().site_name
        if site_name:
            context.update({'site_name': site_name})
        # add contact_email
        contact_email = SiteSettings.objects.first().contact_email
        if contact_email:
            context.update({'contact_email': contact_email})
        # add phone_number
        phone_number = SiteSettings.objects.first().phone_number
        if phone_number:
            context.update({'phone_number': phone_number})
        # add phone_number_two
        phone_number_two = SiteSettings.objects.first().phone_number_two
        if phone_number_two:
            context.update({'phone_number_two': phone_number_two})
        # add map_coordinates
        map_coordinates = SiteSettings.objects.first().map_coordinates
        if map_coordinates:
            context.update({'map_coordinates': map_coordinates})
        # add map_link
        map_link = SiteSettings.objects.first().map_link
        if map_link:
            context.update({'map_link': map_link})
        # add address
        address = SiteSettings.objects.first().address
        if address:
            context.update({'address': address})
        # add contact_about_text
        contact_about_text = SiteSettings.objects.first().contact_about_text
        if contact_about_text:
            context.update({'contact_about_text': contact_about_text})

        # add currency_symbol
        currency_symbol = SiteSettings.objects.first().currency_symbol
        if currency_symbol:
            context.update({'currency_symbol': currency_symbol})

        # add foods_count
        context.update({'foods_count': foods.count()})
        return context


class FoodDetail(DetailView):
    """
    Food detail
    """
    model = Food
    template_name = 'shop-detail.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)

        return context
