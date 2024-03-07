from django.urls import path
import cart.views as views

urlpatterns = [
    path("", views.ListCartView.as_view(), name="API to get list of cart"),
    path("<int:id>", views.DetailCart.as_view(), name="API to get list of cart"),
]
