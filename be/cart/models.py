from django.db import models

from book.models import Book
from order.models import Order
from customer.models import Customer


class Cart(models.Model):
    total = models.PositiveIntegerField(verbose_name="Total", null=True)
    book_id = models.IntegerField(null=True)
    mobile_id = models.IntegerField(null=True)
    clothes_id = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    customer_id = models.CharField(verbose_name="customerid", max_length=255, null=True)

    class Meta:
        __tablename__ = "Cart"
