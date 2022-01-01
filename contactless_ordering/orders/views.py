from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import OrderFlags, OrderDetails
from menu.models import FoodItem
# Create your views here.


class PlaceOrder(APIView):

    def post(self, request, format=None):
        
        tableId = request.data.get('tableId')
        orderList = request.data.get('orderList')

        order = OrderFlags(tableId=tableId)
        order.save()

        for each in orderList:
            item = FoodItem.objects.get(pk=each.get('itemId'))
            order_desc = OrderDetails(
                orderId=order, foodItemId=item, quantity=int(each.get('quantity')))
            order_desc.save()

        response = {
            "message": "Order Placed Successfully",
        }
        return Response(response, status=status.HTTP_200_OK)
