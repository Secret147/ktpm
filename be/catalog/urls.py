from django.urls import path
import catalog.views as views
urlpatterns = [
    path('', views.ListCatalogView.as_view(), name='API to get list of cart'),
  

]