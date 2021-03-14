from django.contrib import admin
# Register your models here.
from pizzeria.models import SiteSettings, PizzaUser, Category, Food, Price, \
    Size, Addon, Order, OrderItem, MainPageSlide

from modeltranslation.admin import TranslationAdmin
from django.utils.translation import ugettext_lazy as _


@admin.register(PizzaUser)
class PizzaUserAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'email',
        'is_staff',
        'is_active',
        'phone_number',
        'language'
    )
    actions = ["deactivate", "activate"]
    list_editable = ("is_active",)
    search_fields = (
        "first_name",
        "last_name",
        "username",
        "email",
        'phone_number'
    )

    def deactivate(self, request, queryset):
        """deactivate users"""
        row_update = queryset.update(is_active=False)
        if row_update == 1:
            message_bit = _("1 user deactivated")
        else:
            message_bit = _(f"{row_update} users deactivated")
        self.message_user(request, f"{message_bit}")

    def activate(self, request, queryset):
        """activate users"""
        row_update = queryset.update(is_active=True)
        if row_update == 1:
            message_bit = _("1 user activated")
        else:
            message_bit = _(f"{row_update} users activated")
        self.message_user(request, f"{message_bit}")

    activate.short_description = _("activate")
    activate.allowed_permissions = ('change',)
    deactivate.short_description = _("deactivate")
    deactivate.allowed_permissions = ('change',)


@admin.register(SiteSettings)
class SiteSettingsAdmin(TranslationAdmin):
    list_display = (
        'site_name',
        'contact_viber',
        'contact_telegram',
        'contact_email',
        'phone_number',
        'phone_number_two',
    )

    def has_add_permission(self, request):
        return False


@admin.register(Category)
class CategoryAdmin(TranslationAdmin):
    list_display = ('title', 'is_active')
    list_editable = ("is_active",)
    search_fields = ("title",)


class PricesInline(admin.TabularInline):
    model = Size.food.through
    extra = 0


@admin.register(Food)
class FoodAdmin(TranslationAdmin):
    list_display = ('title', 'category', 'is_active', 'is_vegetarian')
    list_editable = ("is_active",)
    search_fields = ("title",)
    inlines = (
        PricesInline,
    )


@admin.register(MainPageSlide)
class MainPageSlideAdmin(TranslationAdmin):
    list_display = ('title', 'food', 'is_active',)
    list_editable = ("is_active",)
    search_fields = ("title", "food")


@admin.register(Addon)
class AddonAdmin(TranslationAdmin):
    list_display = ('title', 'category', 'is_active', 'is_vegetarian', 'price')
    list_editable = ("is_active",)
    search_fields = ("title",)


@admin.register(Price)
class PriceAdmin(admin.ModelAdmin):
    list_display = ('food', 'size', 'value')


@admin.register(Size)
class SizeAdmin(admin.ModelAdmin):
    list_display = ('value', 'category')


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'price', 'status', 'created_at', 'finished', 'paid')
    search_fields = ("user",)


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'food', 'food_two', 'size', 'price')
    search_fields = ("food",)
