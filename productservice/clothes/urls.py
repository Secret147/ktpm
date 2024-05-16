from django.urls import path
import clothes.views as views


urlpatterns = [
    path("", views.ListClothesView.as_view(), name="API to get list of book"),
    path("<int:id>", views.DetailClothes.as_view(), name="API to update clothes"),
    path("create/", views.CreateClothes.as_view(), name="API to update clothes"),
    path("search/", views.ClothesViewSet.as_view(), name="API to update clothes"),
]
