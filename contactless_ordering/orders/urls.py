from django.urls import path
from .views import PlaceOrder

app_name = 'orders'

urlpatterns = [
    path('place-order/', PlaceOrder.as_view())
]