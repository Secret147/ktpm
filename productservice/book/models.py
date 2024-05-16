from djongo import models


# Create your models here.
class Book(models.Model):
    name = models.CharField(verbose_name="Name", max_length=255, null=True)
    title = models.CharField(verbose_name="Title", max_length=255, null=True)

    year = models.CharField(verbose_name="Year", max_length=255, null=True)
    image = models.CharField(verbose_name="Image", max_length=255, null=True)
    description = models.CharField(
        verbose_name="Description", max_length=1000, null=True
    )
    language = models.CharField(verbose_name="language", max_length=255, null=True)

    class Meta:
        __tablename__ = "Book"

        # ordering = ['created_at'] -> sorting
