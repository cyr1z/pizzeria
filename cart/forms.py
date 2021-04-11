from django import forms

from Pizzeria_django.settings import QUANTITY_MIN, QUANTITY_MAX


class CartAddProductForm(forms.Form):
    quantity = forms.IntegerField(
        required=True,
        initial=1,
        min_value=QUANTITY_MIN,
        max_value=QUANTITY_MAX,
        widget=forms.NumberInput(
            attrs={
                'class': 'cin-input input-field',
                'name': 'quantity',
                'id': 'quantity',
                'step': '1'

            }
        )
    )

    product_id = forms.IntegerField(
        required=True,
        widget=forms.HiddenInput(
            attrs={
                'name': 'product_id',
                'id': 'product_id',
            }
        )
    )

