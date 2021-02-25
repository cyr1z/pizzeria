from django.contrib import admin
# Register your models here.
from pizzeria.models import SiteSettings, PizzaUser


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
class PizzaUserAdmin(SingletonModelAdmin):
    pass


@admin.register(SiteSettings)
class SiteSettingsAdmin(SingletonModelAdmin):
    pass
