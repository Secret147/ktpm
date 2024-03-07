from django.db import models


class Payment(models.Model):

    total = models.FloatField()
    paymethod = models.CharField(verbose_name="paymethod", max_length=255)

    class Meta:
        __tablename__ = "Paynment"
        # ordering = ['created_at'] -> sorting
