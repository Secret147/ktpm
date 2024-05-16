from django.shortcuts import render

from urllib import request, response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader

from mobiles.models import Mobile
from mobiles.serializers import MobileSerializer
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
        mobiles = Mobile.objects.using("mongo").all()
        serializer = MobileSerializer(mobiles, many=True)

        return Response(serializer.data)

    def post(self, request):
        mobile = Mobile.objects.using("mongo").create()
        serializer = MobileSerializer(mobile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(
                {"message": "Create a new mobile successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return JsonResponse(
                {"message": "Create a new mobile unsuccessfully"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class DetailMobile(APIView):

    def delete(self, request, id):
        try:
            mobile = Mobile.objects.using("mongo").get(id=id)
            mobile.delete()
            return Response("Delete Success")
        except Mobile.DoesNotExist:
            return Response(
                {"message": "Mobile not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, id):

        mobile = Mobile.objects.using("mongo").get(id=id)
        serializer = MobileSerializer(mobile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        try:
            mobile = Mobile.objects.using("mongo").get(id=id)
            serializer = MobileSerializer(mobile)
            return Response(serializer.data)
        except mobile.DoesNotExist:
            return Response(
                {"message": "Mobile not found"}, status=status.HTTP_404_NOT_FOUND
            )


class CreateMobile(APIView):
    def post(self, request):
        mobile_list = request.data
        mobile_objects = [
            Mobile.objects.using("mongo").create(**mobile_data)
            for mobile_data in mobile_list
        ]

        try:
            Mobile.objects.using("mongo").bulk_create(mobile_objects)
            return JsonResponse(
                {"message": "Create new mobiles successfully"},
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return JsonResponse(
                {"message": f"Create new mobiles unsuccessfully: {str(e)}"},
                status=status.HTTP_400_BAD_REQUEST,
            )

class MobileViewSet(generics.ListAPIView):
    serializer_class = MobileSerializer

    def get_queryset(self):
        queryset = Mobile.objects.using("mongo").all()
        keywords = self.request.query_params.get("keywords")
        if keywords:

            query = Q()
            for keyword in keywords.split():

                query |= Q(name__icontains=keyword)
                query |= Q(type__icontains=keyword)
                query |= Q(description__icontains=keyword)
                query |= Q(image__icontains=keyword)
            queryset = queryset.filter(query)
        return queryset