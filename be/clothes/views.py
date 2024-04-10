from django.shortcuts import render

from urllib import request, response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader

from clothes.models import Clothes
from clothes.serializers import ClothesSerializer
from django.http import JsonResponse

from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.db.models import Q


# Create your views here.
class ListClothesView(APIView):

    def get(self, request, format=None):
        clothes = Clothes.objects.using("mongo").all()
        serializer = ClothesSerializer(clothes, many=True)

        return Response(serializer.data)

    def post(self, request):
        clothes = Clothes.objects.using("mongo").create()
        serializer = ClothesSerializer(clothes, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(
                {"message": "Create a new Clothes successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return JsonResponse(
                {"message": "Create a new Clothes unsuccessfully"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    def delete(self, request, id):
        try:
            clothes = Clothes.objects.get(id=id)
            clothes.delete()
            return Response("Delete Success")
        except Clothes.DoesNotExist:
            return Response({"message": "Not found"}, status=status.HTTP_404_NOT_FOUND)


class DetailClothes(APIView):
    def delete(self, request, id):
        try:
            clothes = Clothes.objects.get(id=id)
            clothes.delete()
            return Response("Delete Success")
        except Clothes.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, id):

        clothes = Clothes.objects.using("mongo").get(id=id)
        serializer = ClothesSerializer(clothes, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        try:
            clothes = Clothes.objects.using("mongo").get(id=id)
            serializer = ClothesSerializer(clothes)
            return Response(serializer.data)
        except Clothes.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )
