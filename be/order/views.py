from django.shortcuts import render
from rest_framework.response import Response
from order.models import Order
from order.serializers import OrderSerializer
from rest_framework.views import APIView
from rest_framework import status


class ListOrderView(APIView):
    def get(self, request, format=None):
        person = Order.objects.all()
        serializer = OrderSerializer(person, many=True)
        data = serializer.data
        data.reverse()
        return Response(data)

    def post(self, request):
        serializer = OrderSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save()
            return Response(
                {"message": "Create a new Order successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )


class DetailOrder(APIView):
    def delete(self, request, id):
        try:
            order = Order.objects.get(id=id)
            order.delete()
            return Response("Delete Success")
        except order.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, id):

        order = Order.objects.using("mongo").get(id=id)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        try:
            order = Order.objects.using("mongo").get(id=id)
            serializer = OrderSerializer(Order)
            return Response(serializer.data)
        except order.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )


# Create your views here.
