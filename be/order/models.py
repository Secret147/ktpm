from django.db import models
from customer.models import Customer
from shipment.models import Shipment
from payment.models import Payment


class Order(models.Model):
    totalPrice = models.FloatField()
    product = models.CharField(verbose_name="product", max_length=255)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)
    shipment = models.OneToOneField(Shipment, on_delete=models.CASCADE, null=True)
    payment = models.OneToOneField(Payment, on_delete=models.CASCADE, null=True)

    class Meta:
        __tablename__ = "Order"
        # ordering = ['created_at'] -> sorting


# Create your models here.
