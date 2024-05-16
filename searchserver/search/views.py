from django.shortcuts import render
from rest_framework import generics
from ast import parse
from urllib import request, response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader

from django.http import JsonResponse

from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.db.models import Q
from django.db import connections
import requests


class BookViewSet(APIView):

    def get(self,request): 
        keywords = self.request.query_params.get("keywords")
        print(keywords)
        response = requests.get('http://127.0.0.1:8008/api/books/search/?keywords=' + keywords)
        if response.status_code == 200:
            queryset = response.json()
        else:
            print("Failed to fetch carts from order server:", response.text)
        if keywords:
            return Response(queryset)


class MobileViewSet(APIView):

    def get(self,request): 
        keywords = self.request.query_params.get("keywords")
        response = requests.get('http://127.0.0.1:8008/api/mobiles/search/?keywords=' + keywords)
        if response.status_code == 200:
            queryset = response.json()
        else:
            print("Failed to fetch carts from order server:", response.text)
        if keywords:
            return Response(queryset)




class ClothesViewSet(APIView):

    def get(self,request): 
        keywords = self.request.query_params.get("keywords")
        response = requests.get('http://127.0.0.1:8008/api/clothes/search/?keywords=' + keywords)
        if response.status_code == 200:
            queryset = response.json()
        else:
            print("Failed to fetch carts from order server:", response.text)
        if keywords:
            return Response(queryset)
