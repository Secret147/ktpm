"""
URL configuration for baitap1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import include, path

from cart import views as viewcart
from catalog import views as viewcatalog


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/books/", include("book.urls")),
    path("api/carts/", include("cart.urls")),
    path("api/catalogs/", include("catalog.urls")),
    path("api/mobiles/", include("mobiles.urls")),
    path("api/clothes/", include("clothes.urls")),
    path("api/orders/", include("order.urls")),
    path("api/searchs/", include("search.urls")),
    path("api/customers/", include("customer.urls")),
]
