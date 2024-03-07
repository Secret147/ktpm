from rest_framework import serializers

from .models import Book


class BookSerializer(serializers.ModelSerializer):

    name = serializers.CharField(max_length=255)

    title = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    publisher = serializers.CharField(max_length=255)
    year = serializers.CharField(max_length=255)
    image = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    language = serializers.CharField(max_length=255)

    class Meta:
        model = Book
        fields = (
            "id",
            "name",
            "title",
            "publisher",
            "year",
            "image",
            "description",
            "language",
        )
