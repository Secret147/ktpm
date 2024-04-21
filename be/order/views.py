from django.shortcuts import render
from rest_framework.response import Response
from order.models import Order
from cart.models import Cart
from book.models import Book
from mobiles.models import Mobile
from clothes.models import Clothes
from order.serializers import OrderSerializer
from book.serializers import BookSerializer
from mobiles.serializers import MobileSerializer
from clothes.serializers import ClothesSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse


class ListOrderView(APIView):
    def get(self, request, format=None):
        person = Order.objects.all()
        serializer = OrderSerializer(person, many=True)
        data = serializer.data
        data.reverse()
        return Response(data)

    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        cart = Cart.objects.filter(customer_id=request.data.get("customer_id"))

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


class CreateOrder(APIView):
    def post(self, request):
        carts = Cart.objects.filter(customer_id=request.data.get("customer_id"))
        book_ids = ""
        mobile_ids = ""
        clothes_ids = ""
        serializer = OrderSerializer(data=request.data)

        for cart in carts:
            if cart.book_id:
                book_ids += str(cart.book_id) + "/"
            if cart.mobile_id:
                mobile_ids += str(cart.mobile_id) + "/"
            if cart.clothes_id:
                clothes_ids += str(cart.clothes_id) + "/"

        if serializer.is_valid():
            serializer.validated_data["books_id"] = book_ids
            serializer.validated_data["mobiles_id"] = mobile_ids
            serializer.validated_data["clothes_id"] = clothes_ids

            serializer.save()
            carts.delete()
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
                try:
                    clothe = Clothes.objects.using("mongo").get(pk=clothes_id)
                    clothes.append(clothe)
                except Clothes.DoesNotExist:
                    continue

            if clothes:
                serializer = ClothesSerializer(clothes, many=True)
                return Response(serializer.data)
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
                try:
                    mobile = Mobile.objects.using("mongo").get(pk=mobile_id)
                    mobiles.append(mobile)
                except Mobile.DoesNotExist:
                    continue

            if mobiles:
                serializer = MobileSerializer(mobiles, many=True)
                return Response(serializer.data)
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
            print(book_ids)

            books = []
            for book_id in book_ids:
                try:
                    book = Book.objects.using("mongo").get(pk=book_id)
                    books.append(book)
                except Book.DoesNotExist:
                    continue

            if books:
                serializer = BookSerializer(books, many=True)
                return Response(serializer.data)
            else:
                return Response(
                    {"error": "Books not found"}, status=status.HTTP_404_NOT_FOUND
                )
        except Order.DoesNotExist:
            return Response(
                {"error": "Order not found"}, status=status.HTTP_404_NOT_FOUND
            )
