from django.db import models
from fullname.models import FullName
from address.models import Address

from account.models import Account


class Customer(models.Model):
    fullname = models.OneToOneField(FullName, on_delete=models.CASCADE, null=True)
    account = models.OneToOneField(Account, on_delete=models.CASCADE, null=True)
    username = models.CharField(verbose_name="username", max_length=255, null=True)
    password = models.CharField(verbose_name="password", max_length=255, null=True)
    role = models.IntegerField(null=True)
    email = models.CharField(verbose_name="email", max_length=255, null=True)
    address = models.CharField(verbose_name="address", max_length=255, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        __tablename__ = "Customer"
        # ordering = ['created_at'] -> sorting


# Create your models here.
