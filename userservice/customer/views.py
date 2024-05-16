from django.shortcuts import render
from customer.models import Customer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from customer.serializers import CustomerSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist


class ListCustomerView(APIView):
    def get(self, request, format=None):
        person = Customer.objects.all()
        serializer = CustomerSerializer(person, many=True)
        data = serializer.data
        data.reverse()
        return Response(data)

    def post(self, request):
        
        try:
            Customer.objects.get(
                username=request.data.get("username")
            )  
            return Response(
                {"message": "User already exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except:
            customer = Customer.objects.create()
            serializer = CustomerSerializer(customer, data=request.data)
            if serializer.is_valid():

                serializer.save()
                return Response(
                    {"message": "Create a new Customer successfully"},
                    status=status.HTTP_201_CREATED,
                )
            else:
                return Response(
                    serializer.errors,
                    status=status.HTTP_400_BAD_REQUEST,
                )

            


class DetailCustomer(APIView):
    def delete(self, request, id):
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return Response("Delete Success")
        except customer.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, id):

        customer = Customer.objects.get(id=id)
        serializer = CustomerSerializer(customer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        try:
            customer = Customer.objects.get(id=id)
            serializer = CustomerSerializer(customer)
            return Response(serializer.data)
        except customer.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )


# Create your views here.
class LoginCustomer(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        try:
            cus = Customer.objects.get(username=username)
        except ObjectDoesNotExist:
            return Response(
                {"message": "Username invalid"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if cus:
            if cus.password == password:
                return Response(
                    {"username": cus.username, "role": cus.role, "id": cus.id},
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"message": "Password invalid"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        else:
            return Response(
                {"message": "Invalid username or password"},
                status=status.HTTP_401_UNAUTHORIZED,
            )


# Create your views here.
