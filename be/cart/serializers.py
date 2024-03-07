from rest_framework import serializers
from book.models import Book
from customer.models import Customer

from order.models import Order


from rest_framework import serializers
from .models import Cart


class CartSerializer(serializers.ModelSerializer):
    book_id = serializers.IntegerField()
    order = serializers.PrimaryKeyRelatedField(
        queryset=Order.objects.all(), allow_null=True
    )
    customer = serializers.PrimaryKeyRelatedField(
        queryset=Customer.objects.all(), allow_null=True
    )
    created_at = serializers.DateTimeField(read_only=True)
    update_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Cart
        fields = "__all__"
