from django.db import models


class FullName(models.Model):
    firstName = models.CharField(verbose_name="firstName", max_length=255)
    midName = models.CharField(verbose_name="midName", max_length=255)
    lastName = models.CharField(verbose_name="lastName", max_length=255)

    class Meta:
        __tablename__ = "FullName"
        # ordering = ['created_at'] -> sorting


# Create your models here.
