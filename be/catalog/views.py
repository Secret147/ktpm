
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from catalog.models import Catalog

from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from catalog.models import Catalog
from catalog.serializers import CatalogSerializer
from django.http import JsonResponse

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

class ListCatalogView(APIView):
    def get(self, request, format=None):
        person = Catalog.objects.all()
        serializer = CatalogSerializer(person, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CatalogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Create a new Catalog successfully'
            }, status = status.HTTP_201_CREATED)
        else:
            return JsonResponse({
                'message': 'Create a new Catalog unsuccessfully'
            }, status = status.HTTP_400_BAD_REQUEST)






# Create your views here.
def catalogs(request):
    catalogs = Catalog.objects.all().values()
    template = loader.get_template("catalog.html")
    context = {
        "catalogs": catalogs,
    }
    return HttpResponse(template.render(context, request))
