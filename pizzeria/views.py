from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from django.utils.translation import gettext_lazy as _
from pizzeria.models import SiteSettings


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
        if site_name:
            context.update({'phone_number': phone_number})
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

        return context
