from rest_framework import serializers
from book.models import Book
from customer.models import Customer

from order.models import Order


from rest_framework import serializers
from .models import Cart


class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = "__all__"
