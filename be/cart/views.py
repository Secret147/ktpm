from ast import parse
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from cart.models import Cart


from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


from cart.models import Cart
from book.models import Book
from cart.serializers import CartSerializer
from book.serializers import BookSerializer
from django.http import JsonResponse

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


class ListCartView(APIView):
    def get(self, request, format=None):
        person = Cart.objects.all()
        serializer = CartSerializer(person, many=True)
        data = serializer.data
        data.reverse()
        return Response(data)

    def post(self, request):
        serializer = CartSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save()
            return Response(
                {"message": "Create a new cart successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )


class DetailCart(APIView):
    def delete(self, request, id):
        try:
            book = Cart.objects.get(id=id)
            book.delete()
            return Response("Delete Success")
        except Cart.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, id):

        cart = Cart.objects.using("mongo").get(id=id)
        serializer = CartSerializer(cart, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        try:
            cart = Cart.objects.get(id=id)
            serializer = CartSerializer(cart)
            return Response(serializer.data)
        except Cart.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )
