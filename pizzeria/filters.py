import django_filters
from .models import Food

# CHOICES = [
#     ["title", _("title")],
#     ["price", _("price")],
#     ["-price", _("-price")]
# ]


class FoodFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(title='title', lookup_expr='icontains')
    category__slug = django_filters.CharFilter()
    price__gt = django_filters.NumberFilter(name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(name='price', lookup_expr='lt')
    # ordering = django_filters.OrderingFilter(choices=CHOICES, required=True,
    #                                          empty_label=None, )

    class Meta:
        model = Food
        exclude = [field.name for field in Food._meta.fields]
        order_by_field = 'title'
