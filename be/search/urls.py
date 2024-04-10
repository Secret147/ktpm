from django.urls import path
import search.views as views


urlpatterns = [
    path("book/", views.BookViewSet.as_view(), name="book-list"),
    path("mobile/", views.MobileViewSet.as_view(), name="mobile-list"),
    path("clothes/", views.MobileViewSet.as_view(), name="clothes-list"),
]
