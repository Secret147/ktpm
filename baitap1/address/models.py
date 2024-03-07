from django.db import models


class Address(models.Model):
    nuHouse = models.CharField(verbose_name="nuhHouse", max_length=255)
    street = models.CharField(verbose_name="street", max_length=255)
    district = models.CharField(verbose_name="district", max_length=255)
    city = models.CharField(verbose_name="city", max_length=255)

    class Meta:
        __tablename__ = "Address"
        # ordering = ['created_at'] -> sorting


# Create your models here.
