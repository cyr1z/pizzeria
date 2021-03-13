from modeltranslation.translator import register, TranslationOptions
from pizzeria.models import Category, Food, Addon, SiteSettings, MainPageSlide


@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'size_name', 'size_unit')


@register(Food)
class FoodTranslationOptions(TranslationOptions):
    fields = ('title', 'description')


@register(Addon)
class AddonTranslationOptions(TranslationOptions):
    fields = ('title', 'description')


@register(SiteSettings)
class SiteSettingsTranslationOptions(TranslationOptions):
    fields = ('contact_about_text', 'address', 'welcome_text',
              'welcome_title', 'working_time_text')


@register(MainPageSlide)
class FoodTranslationOptions(TranslationOptions):
    fields = ('title', 'description')
