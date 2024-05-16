from django.urls import path
import customer.views as views


urlpatterns = [
    path("", views.ListCustomerView.as_view(), name="API to get list of customer"),
    path("<int:id>", views.DetailCustomer.as_view(), name="API to update customer"),
    path("login/", views.LoginCustomer.as_view(), name="API to update customer"),
]
