from django.urls import path
import order.views as views


urlpatterns = [
    path("", views.ListOrderView.as_view(), name="API to get list of order"),
    path("<int:id>", views.DetailOrder.as_view(), name="API to update order"),
    path(
        "user/<int:userid>",
        views.ListOrderCustomer.as_view(),
        name="API to update order",
    ),
    path(
        "create/",
        views.CreateOrder.as_view(),
        name="API to update order",
    ),
    path(
        "book/<int:orderid>",
        views.GetBook.as_view(),
        name="API to update order",
    ),
    path(
        "clothes/<int:orderid>",
        views.GetClothes.as_view(),
        name="API to update order",
    ),
    path(
        "mobile/<int:orderid>",
        views.GetMobile.as_view(),
        name="API to update order",
    ),
]
