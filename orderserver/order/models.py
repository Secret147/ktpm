from django.db import models


class Order(models.Model):
    totalPrice = models.FloatField()
    books_id = models.CharField(verbose_name="bookid", max_length=255, null=True)
    mobiles_id = models.CharField(verbose_name="mobileid", max_length=255, null=True)
    clothes_id = models.CharField(verbose_name="clothesid", max_length=255, null=True)
    customer_id = models.CharField(verbose_name="customerid", max_length=255, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)
    address = models.CharField(verbose_name="address", max_length=255, null=True)
    note = models.CharField(verbose_name="note", max_length=255, null=True)
    method = models.CharField(verbose_name="method", max_length=255, null=True)
    numberphone = models.CharField(
        verbose_name="numberphone", max_length=255, null=True
    )
    email = models.CharField(verbose_name="email", max_length=255, null=True)
    name = models.CharField(verbose_name="numberphone", max_length=255, null=True)

    class Meta:
        __tablename__ = "Order"
        # ordering = ['created_at'] -> sorting


# Create your models here.
