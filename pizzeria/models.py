from django.db import models
from django_quill.fields import QuillField
from autoslug import AutoSlugField

from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.


class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.pk = 1
        super(SingletonModel, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj


class SiteSettings(SingletonModel):
    site_name = models.CharField(max_length=40, default='pizza')
    support = models.EmailField(default='support@example.com')
    contact_email = models.EmailField(default='support@example.com')
    contact_tg = models.CharField(max_length=255, null=True, blank=True)
    contact_tg_id = models.CharField(max_length=255, null=True, blank=True)
    contact_viber = models.CharField(max_length=255, null=True, blank=True)
    phone_number = PhoneNumberField(blank=True, null=True)
    phone_number_two = PhoneNumberField(blank=True, null=True)
    map_coordinates = models.CharField(max_length=255, null=True, blank=True)
    contact_about_text = QuillField(null=True, blank=True)
    fb_link = models.CharField(max_length=255, null=True, blank=True)
    tg_link = models.CharField(max_length=255, null=True, blank=True)
    youtube_link = models.CharField(max_length=255, null=True, blank=True)
    twitter_link = models.CharField(max_length=255, null=True, blank=True)
    instagram_link = models.CharField(max_length=255, null=True, blank=True)
    github_link = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'


class PizzaUser(AbstractUser):
    """
    Customised Django User Model
    Add telegram name and telegram id
    unique combinations of First Name and Last Name
    """

    about = models.TextField(
        max_length=100000,
        null=True,
        blank=True
    )
    tg_name = models.CharField(
        max_length=120,
        null=True,
        blank=True
    )
    tg_id = models.CharField(
        max_length=120,
        null=True,
        blank=True
    )

    viber = models.CharField(
        max_length=120,
        null=True,
        blank=True
    )

    phone_number = PhoneNumberField(blank=True, null=True)

    slug = AutoSlugField(populate_from='username')

    lang = models.CharField(
        max_length=120,
        null=True,
        blank=True
    )

    @property
    def full_name(self):
        if self.get_full_name():
            return self.get_full_name()
        else:
            return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return f'{self.get_username()} / {self.get_full_name()} / ' \
               f'{self.phone_number}'

#
# class Category(models.Model):
#     """
#     Category
#     """
#     title = models.CharField(
#         max_length=120
#     )
#     description = models.TextField(
#         max_length=100000,
#         null=True,
#         blank=True
#     )
#     image = models.ImageField(
#         verbose_name='Image',
#         upload_to='categories_images/',
#         default='static/category.png',
#         null=True,
#         blank=True
#     )
#     is_published = models.BooleanField(
#         default=True
#     )
#
#     @property
#     def unicode_title(self):
#         return unidecode(self.title)
#
#     slug = AutoSlugField(populate_from='unicode_title')
#
#     def get_absolute_url(self):
#         return reverse('categories', kwargs={'slug': self.slug})
#
#     class Meta:
#         verbose_name = "Category"
#         verbose_name_plural = "Categories"
#
#     def __str__(self):
#         return f'{self.title}'
