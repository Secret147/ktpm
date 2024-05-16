from django.urls import path
import book.views as views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("", views.ListBookView.as_view(), name="API to get list of book"),
    path("search/", views.BookViewSet.as_view(), name="book-list"),
    path("<int:id>", views.DetailCart.as_view(), name="API to update person"),
    path("create/", views.CreateBook.as_view(), name="API to update mobile"),
]
