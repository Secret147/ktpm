from django.shortcuts import render

from urllib import request, response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader

from shipment.models import Shipment
from shipment.serializers import ShipmentSerializer
from django.http import JsonResponse

from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.db.models import Q


# Create your views here.
class ListMobileView(APIView):

    def get(self, request, format=None):
        shipments = Shipment.objects.using("postgresql").all()
        serializer = ShipmentSerializer(shipments, many=True)

        return Response(serializer.data)

    def post(self, request):
        shipment = Shipment.objects.using("postgresql").create()
        serializer = ShipmentSerializer(shipment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(
                {"message": "Create a new Shipment successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return JsonResponse(
                {"message": "Create a new Shipment unsuccessfully"},
                status=status.HTTP_400_BAD_REQUEST,
            )

