from rest_framework import serializers

from .models import Clothes


class ClothesSerializer(serializers.ModelSerializer):

    name = serializers.CharField(max_length=255)

    producer = serializers.CharField(max_length=255)

    # publisher = serializers.CharField(max_length=255)
    # year = serializers.CharField(max_length=255)
    image = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    style = serializers.CharField(max_length=255)

    class Meta:
        model = Clothes
        fields = (
            "id",
            "name",
            "producer",
            # "publisher",
            # "year",
            "image",
            "description",
            "style",
        )
