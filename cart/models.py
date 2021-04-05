from django.db import models
from pizzeria.models import Category, Price, Food, Size, SiteSettings
from django.utils.translation import ugettext_lazy as _

# Create your models here.


class Product(Price):
    class Meta:
        proxy = True
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    @property
    def size(self):
        return self.size.value

    @property
    def size_unit(self):
        return self.food.category.size_unit

    @property
    def price(self):
        return self.value

    @property
    def title(self):
        return self.food.title

    @property
    def image(self):
        return self.food.image

    def __str__(self):
        return f'{self.title} {self.size}{self.size_unit} - {self.price}' \
               f' {SiteSettings.objects.first().currency_symbol}'
