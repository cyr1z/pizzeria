from django.db import models
from django.urls import reverse
from django_quill.fields import QuillField
from autoslug import AutoSlugField
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
from unidecode import unidecode


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
    contact_telegram = models.CharField(max_length=255, null=True, blank=True)
    contact_telegram_id = models.CharField(max_length=255, null=True,
                                           blank=True)
    contact_viber = models.CharField(max_length=255, null=True, blank=True)
    phone_number = PhoneNumberField(blank=True, null=True)
    phone_number_two = PhoneNumberField(blank=True, null=True)
    map_coordinates = models.CharField(max_length=255, null=True, blank=True)
    contact_about_text = QuillField(null=True, blank=True)
    facebook_link = models.CharField(max_length=255, null=True, blank=True)
    telegram_link = models.CharField(max_length=255, null=True, blank=True)
    youtube_link = models.CharField(max_length=255, null=True, blank=True)
    twitter_link = models.CharField(max_length=255, null=True, blank=True)
    instagram_link = models.CharField(max_length=255, null=True, blank=True)
    github_link = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        verbose_name = _('Site Settings')
        verbose_name_plural = _('Site Settings')

    def __str__(self):
        return f'{self.site_name} settings'


class PizzaUser(AbstractUser):
    """
    Customised Django User Model
    Add telegram name and telegram id
    unique combinations of First Name and Last Name
    """

    class Languages(models.TextChoices):
        UKRAINIAN = 'UK', _('Ukrainian')
        RUSSIAN = 'RU', _('Russian')
        ENGLISH = 'EN', _('English')

    language = models.CharField(
        max_length=2,
        choices=Languages.choices,
        default=Languages.UKRAINIAN,
    )
    about = models.TextField(
        max_length=100000,
        null=True,
        blank=True
    )
    telegram_name = models.CharField(
        max_length=120,
        null=True,
        blank=True,
        unique=True
    )
    telegram_id = models.CharField(
        max_length=120,
        null=True,
        blank=True,
        unique=True
    )
    viber = models.CharField(
        max_length=120,
        null=True,
        blank=True,
        unique=True
    )
    phone_number = PhoneNumberField(
        blank=True,
        null=True,
        unique=True
    )
    slug = AutoSlugField(populate_from='username')

    @property
    def full_name(self):
        if self.get_full_name():
            return self.get_full_name()
        else:
            return self.username

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')

    def __str__(self):
        return f'{self.get_username()} / {self.get_full_name()} / ' \
               f'{self.phone_number}'


class Category(models.Model):
    """
    food category
    """
    title = models.CharField(
        max_length=120
    )
    size_name = models.CharField(
        max_length=120
    )
    size_unit = models.CharField(
        max_length=30
    )
    description = models.TextField(
        max_length=100000,
        null=True,
        blank=True
    )
    image = models.ImageField(
        verbose_name=_('Image'),
        upload_to='categories_images/',
        default='static/category.png',
        null=True,
        blank=True
    )
    is_published = models.BooleanField(
        default=True
    )

    @property
    def unicode_title(self):
        return unidecode(self.title)

    slug = AutoSlugField(populate_from='unicode_title')

    def get_absolute_url(self):
        return reverse('categories', kwargs={'slug': self.slug})

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def __str__(self):
        return f'{self.title}'


class Food(models.Model):
    """
    Food
    """
    title = models.CharField(
        max_length=120
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='foods'
    )
    description = models.TextField(
        max_length=100000,
        null=True,
        blank=True
    )
    image = models.ImageField(
        verbose_name=_('Image'),
        upload_to='categories_images/',
        default='static/food.png',
        null=True,
        blank=True
    )
    is_published = models.BooleanField(
        default=True
    )

    @property
    def unicode_title(self):
        return unidecode(self.title)

    slug = AutoSlugField(populate_from='unicode_title')

    def get_absolute_url(self):
        return reverse('food', kwargs={'slug': self.slug})

    class Meta:
        verbose_name = _("Food")
        verbose_name_plural = _("Foods")

    def __str__(self):
        return f'{self.title}'
