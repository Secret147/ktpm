from rest_framework import serializers

from .models import Author


class AuthorSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=255)
    mail = serializers.CharField(max_length=255)
    phone = serializers.CharField(max_length=255)

    class Meta:
        model = Author
        fields = (
            "id",
            "name",
            "mail",
            "phone",
        )
