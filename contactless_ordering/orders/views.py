from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import OrderFlag, OrderDetail
from menu.models import FoodItem
from .serializers import PendingOrderFlagSerializer, UnpaidOrderFlagSerializer
# Create your views here.


class PlaceOrder(APIView):

    def post(self, request, format=None):

        tableId = request.data.get('tableId')
        orderList = request.data.get('orderList')

        order = OrderFlag(tableId=tableId)
        order.save()

        for each in orderList:
            item = FoodItem.objects.get(pk=each.get('itemId'))
            order_desc = OrderDetail(
                orderId=order, foodItemId=item, quantity=int(each.get('quantity')))
            order_desc.save()

        response = {
            "message": "Order Placed Successfully",
        }
        return Response(response, status=status.HTTP_200_OK)


class ShowPendingOrders(APIView):

    serializer_class = PendingOrderFlagSerializer

    def get(self, request):

        queryset = OrderFlag.objects.all().filter(pending=True)
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

    serializer_class = UnpaidOrderFlagSerializer

    def get(self, request):

        queryset = OrderFlag.objects.all().filter(paid=False).order_by('tableId')
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

        order = OrderFlag.objects.get(pk=orderId)
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

        order = OrderFlag.objects.get(pk=orderId)
        order.paid = True
        order.save()

        response = {
            'data': {
                "message": "Operation Successfully",
                "orderId": orderId
            }
        }
        return Response(response, status=status.HTTP_200_OK)
