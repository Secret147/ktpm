from rest_framework import serializers

from .models import Catalog

class CatalogSerializer(serializers.ModelSerializer):
    description = serializers.CharField( max_length=255)
  
    
    class Meta:
        model = Catalog
        fields = ('id','description')