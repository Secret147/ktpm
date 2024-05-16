from django.urls import path
import mobiles.views as views


urlpatterns = [
    path("", views.ListMobileView.as_view(), name="API to get list of book"),
    path("<int:id>", views.DetailMobile.as_view(), name="API to update mobile"),
    path("create/", views.CreateMobile.as_view(), name="API to update mobile"),
    path("search/", views.MobileViewSet.as_view(), name="API to update mobile"),
]
