from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST

from pizzeria.models import SiteSettings
from .models import Product
from .cart import Cart
from .forms import CartAddProductForm


@require_POST
def cart_add(request):
    cart = Cart(request)

    form = CartAddProductForm(request.POST)
    print(form.errors)
    if form.is_valid():
        data = form.cleaned_data
        product = get_object_or_404(Product, id=data['product_id'])
        cart.add(
            product=product,
            quantity=data['quantity'],
        )
    # return redirect('cart:cart_detail')
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


@require_POST
def cart_add_by_id(request, product_id):
    cart = Cart(request)

    form = CartAddProductForm(request.POST)
    if form.is_valid():
        data = form.cleaned_data
        product = get_object_or_404(Product, id=product_id)
        cart.add(
            product=product,
            quantity=data['quantity'],
        )

    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def cart_remove(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.remove(product)
    return redirect('cart_detail')


def cart_detail(request):
    cart = Cart(request)
    print(cart.this_cart.values())
    return render(
        request, 'cart.html',
        {
            'this_cart': cart.this_cart.values(),
            'currency_symbol': SiteSettings.objects.first().currency_symbol,
            'cart': cart,
        }
    )
