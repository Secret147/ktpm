# Create your views here.

from ast import parse
from urllib import request, response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader

from book.models import Book
from book.serializers import BookSerializer
from django.http import JsonResponse

from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.db.models import Q
from django.db import connections


class ListBookView(APIView):

    def get(self, request, format=None):
        books = Book.objects.using("mongo").all()
        serializer = BookSerializer(books, many=True)

        return Response(serializer.data)

    def post(self, request, format=None):
        book = Book.objects.using("mongo").create()
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():

            serializer.save()
            return Response(
                {"message": "Create a new book successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(
                {"message": "Create a new book unsuccessfully"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class BookViewSet(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        queryset = Book.objects.using("mongo").all()
        keywords = self.request.query_params.get("keywords")
        print(keywords)
        if keywords:

            query = Q()
            for keyword in keywords.split():

                query |= Q(name__icontains=keyword)
                query |= Q(title__icontains=keyword)
                query |= Q(year__icontains=keyword)
                query |= Q(language__icontains=keyword)
            queryset = queryset.filter(query)
        return queryset


class DetailCart(APIView):
    def delete(self, request, id):
        try:
            book = Book.objects.using("mongo").get(id=id)
            book.delete()
            return Response("Delete Success")
        except Book.DoesNotExist:
            return Response(
                {"message": "Book not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, id):

        book = Book.objects.using("mongo").get(id=id)
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        try:
            book = Book.objects.using("mongo").get(id=id)
            serializer = BookSerializer(book)
            return Response(serializer.data)
        except Book.DoesNotExist:
            return Response(
                {"message": "Book not found"}, status=status.HTTP_404_NOT_FOUND
            )


class BookSearchAPIView(generics.ListAPIView):
    serializer_class = BookSerializer


class CreateBook(APIView):
    def post(self, request):
        mobile_list = request.data  # Assume request.data is a list of mobile objects
        mobile_objects = [
            Book.objects.using("mongo").create(**mobile_data)
            for mobile_data in mobile_list
        ]

        try:
            Book.objects.using("mongo").bulk_create(mobile_objects)
            return JsonResponse(
                {"message": "Create new mobiles successfully"},
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return JsonResponse(
                {"message": f"Create new mobiles unsuccessfully: {str(e)}"},
                status=status.HTTP_400_BAD_REQUEST,
            )
