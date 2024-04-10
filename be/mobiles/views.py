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
class ListBookView(APIView):

    def get(self, request, format=None):
        mobiles = Mobile.objects.using("mongo").all()
        serializer = MobileSerializer(mobiles, many=True)

        return Response(serializer.data)

    def post(self, request):
        book = Mobile.objects.using("mongo").create()
        serializer = MobileSerializer(book, data=request.data)
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

    def delete(self, request, id):
        try:
            mobile = Mobile.objects.get(id=id)
            mobile.delete()
            return Response("Delete Success")
        except Mobile.DoesNotExist:
            return Response({"message": "Not found"}, status=status.HTTP_404_NOT_FOUND)


class DetailMobile(APIView):
    def delete(self, request, id):
        try:
            mobile = Mobile.objects.get(id=id)
            mobile.delete()
            return Response("Delete Success")
        except mobile.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
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
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )
