from django.contrib import admin
# Register your models here.
from pizzeria.models import SiteSettings, PizzaUser, Category, Food, Price, \
    Size, Addon

from modeltranslation.admin import TranslationAdmin
from django.utils.translation import ugettext_lazy as _


class SingletonModelAdmin(admin.ModelAdmin):
    """
    Prevents Django admin users deleting the singleton or adding extra rows.
    """
    actions = None  # Removes the default delete action.

    def has_delete_permission(self, request, obj=None):
        return False

    def has_add_permission(self, request):
        return False


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
class SiteSettingsAdmin(SingletonModelAdmin):
    list_display = (
        'site_name',
        'contact_viber',
        'contact_telegram',
        'contact_email',
        'phone_number',
        'phone_number_two',
    )


@admin.register(Category)
class CategoryAdmin(TranslationAdmin):
    list_display = ('title', 'is_active')
    list_editable = ("is_active",)
    search_fields = ("title",)


@admin.register(Food)
class FoodAdmin(TranslationAdmin):
    list_display = ('title', 'category', 'is_active', 'is_vegetarian')
    list_editable = ("is_active",)
    search_fields = ("title",)


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
