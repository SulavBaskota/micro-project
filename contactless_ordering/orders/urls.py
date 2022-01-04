from django.urls import path
from .views import *

app_name = 'orders'

urlpatterns = [
    path('place-order/', PlaceOrder.as_view()),
    path('show-pending-orders/', ShowPendingOrders.as_view()),
    path('show-unpaid-orders/', ShowUnpaidOrders.as_view()),
    path('mark-completed/', MarkCompleted.as_view()),
    path('mark-paid/', MarkPaid.as_view())
]