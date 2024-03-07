from django.db import models


class TestApp(models.Model):
    names = models.CharField(max_length=100)
    ages = models.IntegerField()

    class Meta:
        app_label = "TestAppMongoDB"
