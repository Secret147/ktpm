from django.shortcuts import render
from rest_framework.response import Response
from order.models import Order
from order.serializers import OrderSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse
import requests


class ListOrderView(APIView):
    def get(self, request, format=None):
        person = Order.objects.all()
        serializer = OrderSerializer(person, many=True)
        data = serializer.data
        data.reverse()
        return Response(data)

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

        order = Order.objects.get(id=id)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        try:
            order = Order.objects.get(id=id)
            serializer = OrderSerializer(order)
            return Response(serializer.data)
        except Order.DoesNotExist:
            return Response(
                {"message": "Cart not found"}, status=status.HTTP_404_NOT_FOUND
            )


# Create your views here.
class ListOrderCustomer(APIView):

    def get(self, request, userid):
        try:
            cart_items = Order.objects.filter(customer_id=userid)

            cart_items_data = list(cart_items.values())
            cart_items_data.reverse()
            return JsonResponse(cart_items_data, safe=False)
        except Order.DoesNotExist:
            return JsonResponse(
                {"message": "No items found for this customer"}, status=404
            )
order_api_url = 'http://localhost:8002/api/carts/user/'

# Thông tin khách hàng


class CreateOrder(APIView):
    def post(self, request):
        customer_id = request.data.get("customer_id")
        response = requests.get(order_api_url + customer_id)

        if response.status_code == 200:
            carts = response.json()
        else:
            print("Failed to fetch carts from order server:", response.text)
        book_ids = ""
        mobile_ids = ""
        clothes_ids = ""
        serializer = OrderSerializer(data=request.data)

        for cart in carts:
            if cart['book_id']:
                book_ids += str(cart['book_id']) + "/"
            if cart['mobile_id']:
                mobile_ids += str(cart['mobile_id']) + "/"
            if cart['clothes_id']:
                clothes_ids += str(cart['clothes_id']) + "/"

        if serializer.is_valid():
            serializer.validated_data["books_id"] = book_ids
            serializer.validated_data["mobiles_id"] = mobile_ids
            serializer.validated_data["clothes_id"] = clothes_ids

            serializer.save()
            requests.delete(order_api_url + customer_id)
            return Response(
                {"message": "Create a new Order successfully"},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )


class GetClothes(APIView):
    def get(self, request, orderid):
        try:
            
            order = Order.objects.get(id=orderid)
            clothes_id = order.clothes_id
            clothes_ids = clothes_id.split("/")
            clothes_ids = [int(x) for x in clothes_ids if x]
            print(clothes_ids)

            clothes = []
            for clothes_id in clothes_ids:
                
                response = requests.get('http://localhost:8008/api/clothes/' + str(clothes_id))

                if response.status_code == 200:
                    clothe = response.json()
                else:
                    print("Failed to fetch carts from order server:", response.text)
                clothes.append(clothe)
                

            if clothes:     
                return Response(clothes)
            else:
                return Response(
                    {"error": "Clothes not found"}, status=status.HTTP_404_NOT_FOUND
                )
        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND
            )


class GetMobile(APIView):
    def get(self, request, orderid):
        try:
            order = Order.objects.get(id=orderid)
            mobiles_id = order.mobiles_id
            mobile_ids = mobiles_id.split("/")
            mobile_ids = [int(x) for x in mobile_ids if x]

            mobiles = []
            for mobile_id in mobile_ids:
             
                response = requests.get('http://localhost:8008/api/mobiles/' + str(mobile_id))

                if response.status_code == 200:
                    mobile = response.json()
                else:
                    print("Failed to fetch carts from order server:", response.text)
             
                mobiles.append(mobile)
                

            if mobiles:
                
                return Response(mobiles)
            else:
                return Response(
                    {"error": "Mobiles not found"}, status=status.HTTP_404_NOT_FOUND
                )
        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND
            )


class GetBook(APIView):
    def get(self, request, orderid):
        try:
            order = Order.objects.get(id=orderid)
            books_id = order.books_id
            book_ids = books_id.split("/")
            book_ids = [int(x) for x in book_ids if x]

            books = []
            for book_id in book_ids:
                
                response = requests.get('http://localhost:8008/api/books/' + str(book_id))

                if response.status_code == 200:
                    book = response.json()
                else:
                    print("Failed to fetch carts from order server:", response.text)
                
                books.append(book)
                

            if books:
                
                return Response(books)
            else:
                return Response(
                    {"error": "Books not found"}, status=status.HTTP_404_NOT_FOUND
                )
        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND
            )
