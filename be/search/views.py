from django.shortcuts import render
from rest_framework import generics
from ast import parse
from urllib import request, response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader

from book.models import Book
from book.serializers import BookSerializer
from mobiles.serializers import MobileSerializer
from clothes.serializers import ClothesSerializer
from mobiles.models import Mobile
from clothes.models import Clothes
from django.http import JsonResponse

from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.db.models import Q
from django.db import connections


class BookViewSet(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        queryset = Book.objects.using("mongo").all()
        keywords = self.request.query_params.get("keywords")
        if keywords:

            query = Q()
            for keyword in keywords.split():

                query |= Q(name__icontains=keyword)
                query |= Q(title__icontains=keyword)
                query |= Q(year__icontains=keyword)
                query |= Q(language__icontains=keyword)
            queryset = queryset.filter(query)
        return queryset


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


class ClothesViewSet(generics.ListAPIView):
    serializer_class = ClothesSerializer

    def get_queryset(self):
        queryset = Clothes.objects.using("mongo").all()
        keywords = self.request.query_params.get("keywords")
        if keywords:

            query = Q()
            for keyword in keywords.split():

                query |= Q(name__icontains=keyword)
                query |= Q(image__icontains=keyword)
                query |= Q(style__icontains=keyword)
                query |= Q(description__icontains=keyword)
            queryset = queryset.filter(query)
        return queryset
