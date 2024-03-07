from django.db import models


class Shipment(models.Model):
    type = models.CharField(verbose_name="type", max_length=255)
    cost = models.FloatField()

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        __tablename__ = "Shipment"
        # ordering = ['created_at'] -> sorting


# Create your models here.
