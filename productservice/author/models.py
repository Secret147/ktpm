from django.db import models


class Author(models.Model):
    name = models.CharField(verbose_name="Name", max_length=255)
    mail = models.CharField(verbose_name="Name", max_length=255)
    phone = models.CharField(verbose_name="Name", max_length=255)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        __tablename__ = "Author"
        # ordering = ['created_at'] -> sorting


# Create your models here.
