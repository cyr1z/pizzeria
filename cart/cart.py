from decimal import Decimal
from django.conf import settings
from cart.models import Product


class Cart(object):

    def __init__(self, request):
        """
        initializing the cart
        """
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            # save an empty cart in the session
            cart = self.session[settings.CART_SESSION_ID] = {}
        self.cart = cart

    def add(self, product, quantity=1, update_quantity=False):
        """
        add a product to your cart or update its quantity
        """
        product_id = str(product.id)
        if product_id not in self.cart:
            self.cart[product_id] = {
                'quantity': 0,
                'price': str(product.price)
            }
        if update_quantity:
            self.cart[product_id]['quantity'] = quantity
        else:
            self.cart[product_id]['quantity'] += quantity
        self.save()

    def save(self):
        # session update cart
        self.session[settings.CART_SESSION_ID] = self.cart
        # Mark the session as "modified" to make sure it is saved
        self.session.modified = True

    def remove(self, product):
        """
        removing an item from the cart
        """
        product_id = str(product.id)
        if product_id in self.cart:
            del self.cart[product_id]
            self.save()

    def __iter__(self):
        """
        looping through the items in the cart and retrieving products
        from the database
        """
        product_ids = self.cart.keys()
        # getting product objects and adding them to cart
        products = Product.objects.filter(id__in=product_ids)
        for product in products:
            self.cart[str(product.id)]['product'] = product

        for item in self.cart.values():
            item['price'] = Decimal(item['price'])
            item['total_price'] = item['price'] * item['quantity']
            yield item

    def get_total_price(self):
        """
        calculating the cost of goods in the basket
        """
        return sum(Decimal(item['price']) * item['quantity'] for item in
                   self.cart.values())

    def clear(self):
        # deleting a basket from a session
        del self.session[settings.CART_SESSION_ID]
        self.session.modified = True
