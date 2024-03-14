from rest_framework import serializers

from .models import Mobile


class MobileSerializer(serializers.ModelSerializer):

    name = serializers.CharField(max_length=255)

    producer = serializers.CharField(max_length=255)

    # publisher = serializers.CharField(max_length=255)
    # year = serializers.CharField(max_length=255)
    image = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    type = serializers.CharField(max_length=255)

    class Meta:
        model = Mobile
        fields = (
            "id",
            "name",
            "producer",
            # "publisher",
            # "year",
            "image",
            "description",
            "type",
        )
