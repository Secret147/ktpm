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
        books = Mobile.objects.using("mongo").all()
        serializer = MobileSerializer(books, many=True)

        return Response(serializer.data)
