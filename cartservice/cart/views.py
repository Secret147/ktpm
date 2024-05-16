from ast import parse
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from cart.models import Cart


from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


from cart.models import Cart
from cart.serializers import CartSerializer

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

        cart = Cart.objects.get(id=id)
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


class ListCartCustomer(APIView):

    def get(self, request, userid):
        try:
            cart_items = Cart.objects.filter(customer_id=userid)

            cart_items_data = list(cart_items.values())
            cart_items_data.reverse()
            return JsonResponse(cart_items_data, safe=False)
        except Cart.DoesNotExist:
            return JsonResponse(
                {"message": "No items found for this customer"}, status=404
            )
    
    def delete(self, request, userid):
        try:
            cart_items = Cart.objects.filter(customer_id=userid).delete()

            return JsonResponse("Delete Success", safe=False)
        except Cart.DoesNotExist:
            return JsonResponse(
                {"message": "No items found for this customer"}, status=404
            )


class CountCartCustomer(APIView):
    def get(self, request, userid, format=None):
        try:
            cart_item_count = Cart.objects.filter(customer_id=userid).count()
            return JsonResponse({"item_count": cart_item_count}, status=200)
        except Cart.DoesNotExist:
            return JsonResponse(
                {"message": "No items found for this customer"}, status=404
            )
