from django.urls import path
import order.views as views


urlpatterns = [
    path("", views.ListOrderView.as_view(), name="API to get list of order"),
    path("<int:id>", views.DetailOrder.as_view(), name="API to update order"),
]
