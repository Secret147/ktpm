from django.db import models


class Clothes(models.Model):

    name = models.CharField(verbose_name="Name", max_length=255, null=True)
    style = models.CharField(verbose_name="Styles", max_length=255, null=True)
    image = models.CharField(verbose_name="Image", max_length=255, null=True)
    description = models.CharField(
        verbose_name="Description", max_length=1000, null=True
    )

    class Meta:
        __tablename__ = "Clothes"
