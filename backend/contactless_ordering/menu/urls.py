from django.urls import path
from .views import ShowMenu

app_name = 'menu'

urlpatterns = [
    path('show-menu/', ShowMenu.as_view())
]