from django.db import models


class Publisher(models.Model):
    name = models.CharField(verbose_name="name", max_length=255)
    mail = models.CharField(verbose_name="mail", max_length=255)
    phone = models.CharField(verbose_name="phone", max_length=255)

    class Meta:
        __tablename__ = "Publisher"
        # ordering = ['created_at'] -> sorting


# Create your models here.
