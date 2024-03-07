from django.db import models
from author.models import Author

from publishher.models import Publisher


# Create your models here.
class Book(models.Model):

    name = models.CharField(verbose_name="Name", max_length=255)
    title = models.CharField(verbose_name="Title", max_length=255)
    author = models.ManyToManyField(Author, null=True)
    publisher = models.ManyToManyField(Publisher, null=True)
    year = models.CharField(verbose_name="Year", max_length=255)
    image = models.CharField(verbose_name="Image", max_length=255)
    description = models.CharField(verbose_name="Description", max_length=255)
    language = models.CharField(verbose_name="language", max_length=255)

    class Meta:
        __tablename__ = "Book"

        # ordering = ['created_at'] -> sorting
