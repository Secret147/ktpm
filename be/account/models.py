from django.db import models


class Account(models.Model):
    username = models.CharField(verbose_name="username", max_length=255)
    passwword = models.CharField(verbose_name="password", max_length=255)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    update_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        __tablename__ = "Account"
        # ordering = ['created_at'] -> sorting


# Create your models here.
