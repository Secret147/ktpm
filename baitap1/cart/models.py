from django.db import models

from book.models import Book
from order.models import Order
from customer.models import Customer


# Create your models here.b
class Cart(models.Model):
    total = models.PositiveIntegerField(verbose_name="Total")
    book_id = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True)

    class Meta:
        __tablename__ = "Cart"
        # ordering = ['created_at'] -> sorting
