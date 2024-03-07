from django.db import models


class Catalog(models.Model):

    description = models.CharField(verbose_name="description", max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        __tablename__ = "Catalog"
        # ordering = ['created_at'] -> sorting


# Create your models here.
