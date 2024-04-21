from django.urls import path
import cart.views as views

urlpatterns = [
    path("", views.ListCartView.as_view(), name="API of cart"),
    path("<int:id>", views.DetailCart.as_view(), name="API to get list of cart"),
    path(
        "user/<int:userid>",
        views.ListCartCustomer.as_view(),
        name="API to get list of cart",
    ),
    path(
        "count/<int:userid>",
        views.CountCartCustomer.as_view(),
        name="API to get list of cart",
    ),
]
