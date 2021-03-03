from modeltranslation.translator import register, TranslationOptions
from pizzeria.models import Category, Food


@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'size_name', 'size_unit')


@register(Food)
class FoodTranslationOptions(TranslationOptions):
    fields = ('title', 'description')
