from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from django.utils.translation import gettext_lazy as _
from pizzeria.models import SiteSettings, MainPageSlide


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

        return context
