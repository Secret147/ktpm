from django.db import models


class Mobile(models.Model):

    name = models.CharField(verbose_name="Name", max_length=255, null=True)
    # publisher = models.CharField(verbose_name="Publisher", max_length=255, null=True)
    type = models.CharField(verbose_name="Type", max_length=255, null=True)
    image = models.CharField(verbose_name="Image", max_length=1000, null=True)
    producer = models.CharField(verbose_name="Producer", max_length=255, null=True)
    description = models.CharField(
        verbose_name="Description", max_length=1000, null=True
    )

    class Meta:
        __tablename__ = "Mobile"

        # ordering = ['created_at'] -> sorting


# Create your models here.
