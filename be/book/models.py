from djongo import models


# Create your models here.
class Book(models.Model):
    name = models.CharField(verbose_name="Name", max_length=255)
    title = models.CharField(verbose_name="Title", max_length=255)
    author = models.CharField(verbose_name="author", max_length=255)
    publisher = models.CharField(verbose_name="Publisher", max_length=255)
    year = models.CharField(verbose_name="Year", max_length=255)
    image = models.CharField(verbose_name="Image", max_length=255)
    description = models.CharField(verbose_name="Description", max_length=255)
    language = models.CharField(verbose_name="language", max_length=255)

    class Meta:
        __tablename__ = "Book"

        # ordering = ['created_at'] -> sorting
