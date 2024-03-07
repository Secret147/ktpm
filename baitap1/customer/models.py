from django.db import models
from fullname.models import FullName
from address.models import Address

from account.models import Account


class Customer(models.Model):
    fullname = models.OneToOneField(FullName, on_delete=models.CASCADE, null=True)
    account = models.OneToOneField(Account, on_delete=models.CASCADE, null=True)
    fullname = models.OneToOneField(FullName, on_delete=models.CASCADE, null=True)
    total = models.PositiveIntegerField(verbose_name="Total")

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        __tablename__ = "Customer"
        # ordering = ['created_at'] -> sorting


# Create your models here.
