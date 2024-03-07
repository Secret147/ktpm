from django.urls import path
import book.views as views


urlpatterns = [
    path("", views.ListBookView.as_view(), name="API to get list of book"),
    path("<int:id>", views.DetailCart.as_view(), name="API to get list of book"),
    # path("search/", views.UserViewSet.as_view(), name="mymodel-search"),
    # path("se/", views.BookSearchAPIView.as_view(), name="book-search"),
    path('search/', views.UserViewSet.as_view(), name='book-list'),
]
