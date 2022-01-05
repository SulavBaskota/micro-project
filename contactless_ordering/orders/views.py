from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import OrderFlags, OrderDetails
from menu.models import FoodItem
from .serializers import PendingOrderFlagsSerializer, UnpaidOrderFlagsSerializer
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


class ShowPendingOrders(APIView):

    serializer_class = PendingOrderFlagsSerializer

    def get(self, request):

        queryset = OrderFlags.objects.all().filter(pending=True)
        response = {
            "pendingOrders": [

            ]
        }

        if queryset.exists():
            for query_item in queryset:
                response['pendingOrders'].append(
                    self.serializer_class(query_item).data)

        return Response(response, status=status.HTTP_200_OK)


class ShowUnpaidOrders(APIView):

    serializer_class = UnpaidOrderFlagsSerializer

    def get(self, request):

        queryset = OrderFlags.objects.all().filter(paid=False, pending=False)
        response = {
            "unpaidOrders": [

            ]
        }

        if queryset.exists():
            for query_item in queryset:
                response['unpaidOrders'].append(
                    self.serializer_class(query_item).data)

        return Response(response, status=status.HTTP_200_OK)


class MarkCompleted(APIView):

    def post(self, request, format=None):

        orderId = request.data.get('orderId')

        order = OrderFlags.objects.get(pk=orderId)
        order.pending = False
        order.save()

        response = {
            'data': {
                "message": "Operation Successfully",
                "orderId": orderId
            }
        }
        return Response(response, status=status.HTTP_200_OK)


class MarkPaid(APIView):

    def post(self, request, format=None):

        orderId = request.data.get('orderId')

        order = OrderFlags.objects.get(pk=orderId)
        order.paid = True
        order.save()

        response = {
            'data': {
                "message": "Operation Successfully",
                "orderId": orderId
            }
        }
        return Response(response, status=status.HTTP_200_OK)