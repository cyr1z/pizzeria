from decimal import Decimal

from Pizzeria_django.settings import QUANTITY_MIN, QUANTITY_MAX, \
    CART_SESSION_ID
from cart.models import Product


class Cart:

    def __init__(self, request):
        """
        initializing the cart
        """
        self.session = request.session
        if not self.session.get(CART_SESSION_ID):
            # save an empty cart in the session
            cart_add = self.session[CART_SESSION_ID] = {}
            self.this_cart = cart_add
        else:
            self.this_cart = self.session.get(CART_SESSION_ID)

    def add(self, product, quantity=1):
        """
        add a product to your cart or update its quantity
        """

        if quantity not in range(QUANTITY_MIN, QUANTITY_MAX + 1):
            quantity = 1

        product_id = str(product.id)
        if product_id not in self.this_cart:
            self.this_cart[product_id] = {
                'quantity': quantity,
                'price': str(product.price),
                'size_value': str(product.size_value),
                'size_unit': str(product.size_unit),
                'title': str(product.title),
                'image': str(product.image),
                'total_price': str(product.price * quantity),
            }

        else:
            self.this_cart[product_id]['quantity'] += quantity

        self.save()

    def save(self):
        # session update cart
        self.session[CART_SESSION_ID] = self.this_cart
        # Mark the session as "modified" to make sure it is saved
        self.session.modified = True

    def remove(self, product):
        """
        removing an item from the cart
        """
        product_id = str(product.id)
        if product_id in self.this_cart:
            del self.this_cart[product_id]
            self.save()

    def __iter__(self):
        """
        looping through the items in the cart and retrieving products
        from the database
        """
        product_ids = self.this_cart.keys()
        # getting product objects and adding them to cart
        products = Product.objects.filter(id__in=product_ids)
        for product in products:
            self.this_cart[str(product.id)]['product'] = product

        for item in self.this_cart.values():
            item['price'] = Decimal(item['price'])
            item['total_price'] = item['price'] * item['quantity']
            yield item

    def get_total_price(self):
        """
        calculating the cost of goods in the basket
        """
        return sum(Decimal(item['price']) * item['quantity'] for item in
                   self.this_cart.values())

    def clear(self):
        # deleting a basket from a session
        del self.session[CART_SESSION_ID]
        self.session.modified = True
