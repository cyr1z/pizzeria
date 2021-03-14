from django.db import models
from django.urls import reverse
from django.utils import timezone
from django_quill.fields import QuillField
from autoslug import AutoSlugField
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
from unidecode import unidecode


class SiteSettings(models.Model):
    site_name = models.CharField(
        max_length=40,
        default='pizza',
        verbose_name=_('Site name'),
    )
    support_email = models.EmailField(
        default='support@example.com',
        verbose_name=_('Support email'),
    )
    contact_email = models.EmailField(
        default='support@example.com',
        verbose_name=_('Contact email'),
    )
    contact_telegram = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Contact telegram'),
    )
    contact_telegram_id = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Contact telegram id'),
    )
    contact_viber = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Contact viber'),
    )
    phone_number = PhoneNumberField(
        blank=True,
        null=True,
        verbose_name=_('Contact phone number'),
    )
    phone_number_two = PhoneNumberField(
        blank=True,
        null=True,
        verbose_name=_('Second contact phone number'),
    )
    map_coordinates = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Map coordinates'),
    )

    address = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('address'),
    )
    map_link = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('map link'),
    )
    contact_about_text = QuillField(
        null=True,
        blank=True,
        verbose_name=_('Contact about text'),
    )
    facebook_link = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Facebook link'),
    )
    telegram_link = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Telegram link'),
    )
    youtube_link = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Youtube link'),
    )
    twitter_link = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Twitter link'),
    )
    instagram_link = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Instagram Link'),
    )
    github_link = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Github Link'),
    )
    currency_symbol = models.CharField(
        max_length=10,
        null=True,
        blank=True,
        unique=True,
        verbose_name=_('Currency symbol'),
    )
    welcome_title = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('welcome title'),
    )
    welcome_text = QuillField(
        null=True,
        blank=True,
        verbose_name=_('welcome text'),
    )
    working_time_text = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name=_('Working time text'),
    )
    saturday_work_start = models.CharField(
        max_length=10,
        null=True,
        blank=True,
        verbose_name=_('Saturday work start'),
    )
    saturday_work_finish = models.CharField(
        max_length=10,
        null=True,
        blank=True,
        verbose_name=_('Saturday work finish'),
    )
    sunday_work_start = models.CharField(
        max_length=10,
        null=True,
        blank=True,
        verbose_name=_('Sunday work start'),
    )
    sunday_work_finish = models.CharField(
        max_length=10,
        null=True,
        blank=True,
        verbose_name=_('Sunday work finish'),
    )
    weekday_work_start = models.CharField(
        max_length=10,
        null=True,
        blank=True,
        verbose_name=_('weekday work start'),
    )
    weekday_work_finish = models.CharField(
        max_length=10,
        null=True,
        blank=True,
        verbose_name=_('weekday work finish'),
    )

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj

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
        UKRAINIAN = 'uk', _('Ukrainian')
        RUSSIAN = 'ru', _('Russian')
        ENGLISH = 'en', _('English')

    language = models.CharField(
        max_length=2,
        choices=Languages.choices,
        default=Languages.UKRAINIAN,
        verbose_name=_('language'),
    )
    about = models.TextField(
        max_length=100000,
        null=True,
        blank=True,
        verbose_name=_('about'),
    )
    telegram_name = models.CharField(
        max_length=120,
        null=True,
        blank=True,
        unique=True,
        verbose_name=_('telegram name'),
    )
    telegram_id = models.CharField(
        max_length=120,
        null=True,
        blank=True,
        unique=True,
        verbose_name=_('telegram id'),
    )
    viber = models.CharField(
        max_length=120,
        null=True,
        blank=True,
        unique=True,
        verbose_name=_('viber'),
    )
    phone_number = PhoneNumberField(
        blank=True,
        null=True,
        unique=True,
        verbose_name=_('phone number'),
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
        max_length=120,
        verbose_name=_('Title'),
    )
    size_name = models.CharField(
        max_length=120,
        verbose_name=_('Size name'),
        null=True,
        blank=True,
    )
    size_unit = models.CharField(
        max_length=30,
        verbose_name=_('Size unit'),
        null=True,
        blank=True,
    )
    description = models.TextField(
        max_length=100000,
        null=True,
        blank=True,
        verbose_name=_('Description'),
    )
    image = models.ImageField(
        verbose_name=_('Image'),
        upload_to='categories_images/',
        default='static/category.png',
        null=True,
        blank=True,
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name=_('Is active'),
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
        max_length=120,
        verbose_name=_('Title'),
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='foods',
        verbose_name=_('Category'),
    )
    description = models.TextField(
        max_length=100000,
        null=True,
        blank=True,
        verbose_name=_('Description'),
    )
    image = models.ImageField(
        verbose_name=_('Image'),
        upload_to='categories_images/',
        default='static/food.png',
        null=True,
        blank=True
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name=_('Is active'),
    )
    is_vegetarian = models.BooleanField(
        default=False,
        verbose_name=_('Is vegetarian'),
    )
    is_spicy = models.BooleanField(
        default=False,
        verbose_name=_('Is spicy'),
    )
    size = models.ManyToManyField(
        'Size',
        through='Price',
        related_name='foods'
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


class Size(models.Model):
    """
    Size
    """
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='sizes',
        verbose_name=_('Category'),
    )
    food = models.ManyToManyField(
        Food,
        through='Price',
        related_name='sizes',
        verbose_name=_('Food'),
    )
    value = models.FloatField(
        verbose_name=_('Value'),
    )

    class Meta:
        verbose_name = _("Size")
        verbose_name_plural = _("Sizes")

    def __str__(self):
        return f'{self.value} {self.category.size_unit} ' \
               f'({self.category.title})'


class Price(models.Model):
    """
    Price
    """
    food = models.ForeignKey(
        Food,
        on_delete=models.CASCADE,
        verbose_name=_("Food"),
    )
    size = models.ForeignKey(
        Size,
        on_delete=models.CASCADE,
        verbose_name=_("Size"),
    )
    value = models.FloatField(
        verbose_name=_("Value"),
    )

    class Meta:
        ordering = ['value']
        verbose_name = _("Price")
        verbose_name_plural = _("Prices")

    def __str__(self):
        return f'"{self.food.title}" - {self.size.value} ' \
               f'{self.size.category.size_unit}: {self.value} ' \
               f'{SiteSettings.objects.first().currency_symbol}'


class Addon(models.Model):
    """
    Addon
    """
    title = models.CharField(
        max_length=120,
        verbose_name=_('Title'),
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='addons',
        verbose_name=_('Category'),
    )
    description = models.TextField(
        max_length=100000,
        null=True,
        blank=True,
        verbose_name=_('Description'),
    )
    image = models.ImageField(
        verbose_name=_('Image'),
        upload_to='categories_images/',
        default='static/food.png',
        null=True,
        blank=True
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name=_('Is active'),
    )
    is_vegetarian = models.BooleanField(
        default=False,
        verbose_name=_('Is vegetarian'),
    )
    price = models.FloatField(
        verbose_name=_("Price"),
    )
    order_item = models.ManyToManyField(
        'OrderItem',
        verbose_name=_('Order Item'),
        related_name='addons'
    )

    class Meta:
        verbose_name = _("Addon")
        verbose_name_plural = _("Addons")

    def __str__(self):
        return f'{self.title} - {self.price}' \
               f' {SiteSettings.objects.first().currency_symbol}'


class Order(models.Model):
    """
    Order
    """

    class Status(models.IntegerChoices):
        CREATED = 0, _('Created')
        ACCEPTED = 1, _('Accepted')
        READY = 2, _('Ready')
        DELIVERY = 3, _('Delivery')
        GIVEN = 4, _('Given')

    created_at = models.DateTimeField(
        default=timezone.now,
        verbose_name=_('created at'),
    )
    status = models.PositiveIntegerField(
        choices=Status.choices,
        default=Status.CREATED,
        verbose_name=_('status'),
    )
    user = models.ForeignKey(
        PizzaUser,
        on_delete=models.CASCADE,
        related_name='orders',
        verbose_name=_('User'),
    )
    paid = models.BooleanField(
        verbose_name=_('Paid'),
    )
    finished = models.BooleanField(
        verbose_name=_('Finished'),
    )

    @property
    def price(self):
        return ''

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    def __str__(self):
        return f'{self.user} - {self.created_at}'


class OrderItem(models.Model):
    """
    Order item
    """
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name='items',
        verbose_name=_('Order'),
    )
    food = models.ForeignKey(
        Food,
        on_delete=models.PROTECT,
        verbose_name=_("Food"),
        related_name='order_item'
    )
    food_two = models.ForeignKey(
        Food,
        on_delete=models.PROTECT,
        verbose_name=_("Food two"),
        null=True,
        blank=True,
        related_name='half_order_item'
    )
    addon = models.ManyToManyField(
        Addon,
        verbose_name=_('Addon'),
        related_name='order_items',
        blank=True,
    )
    size = models.ForeignKey(
        Size,
        on_delete=models.PROTECT,
        verbose_name=_("Size"),
    )
    price = models.FloatField(
        verbose_name=_("Price"),
    )

    class Meta:
        verbose_name = _("Order item")
        verbose_name_plural = _("Order items")

    def __str__(self):
        return f'{self.order} {self.food} - {self.price}' \
               f' {SiteSettings.objects.first().currency_symbol}'


class MainPageSlide(models.Model):
    """
    Slide for main page slider
    """

    food = models.ForeignKey(
        Food,
        on_delete=models.PROTECT,
        verbose_name=_("Food"),
        related_name='slides'
    )
    title = models.CharField(
        max_length=120,
        verbose_name=_('Title'),
    )
    description = models.TextField(
        max_length=100000,
        null=True,
        blank=True,
        verbose_name=_('Description'),
    )
    image = models.ImageField(
        verbose_name=_('Image'),
        upload_to='slider_images/',
        default='static/food.png',
        null=True,
        blank=True
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name=_('Is active'),
    )

    # def get_read_more_url(self):
    #     return reverse('food_detail', kwargs={'pk': self.food.pk})

    class Meta:
        verbose_name = _("Slide")
        verbose_name_plural = _("Slides")

    def __str__(self):
        return f'{self.title} {self.food}'
