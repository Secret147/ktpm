# Create your views here.

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


class ListBookView(APIView):

    def get(self, request, format=None):
        books = Book.objects.using("mongo").all()
        serializer = BookSerializer(books, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(
                {"message": "Create a new book successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return JsonResponse(
                {"message": "Create a new book unsuccessfully"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class UserViewSet(generics.ListAPIView):
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


class DetailCart(APIView):
    def delete(self, request, id):
        try:
            book = Book.objects.get(id=id)
            book.delete()
            return Response("Delete Success")
        except Book.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def get(self, request, id):
        try:
            book = Book.objects.using("mongo").get(id=id)
            serializer = BookSerializer(book)
            return Response(serializer.data)
        except Book.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )


class BookSearchAPIView(generics.ListAPIView):
    serializer_class = BookSerializer
