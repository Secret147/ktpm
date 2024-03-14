from django.db import models

from author.models import Author

from publishher.models import Publisher


class Clothes(models.Model):

    name = models.CharField(verbose_name="Name", max_length=255)
    producer = models.CharField(verbose_name="Producer", max_length=255)
    # author = models.ManyToManyField(Author, null=True)
    # publisher = models.ManyToManyField(Publisher, null=True)
    style = models.CharField(verbose_name="Styles", max_length=255)
    image = models.CharField(verbose_name="Image", max_length=255)
    description = models.CharField(verbose_name="Description", max_length=255)

    class Meta:
        __tablename__ = "Clothes"

        # ordering = ['created_at'] -> sorting


# Create your models here.
