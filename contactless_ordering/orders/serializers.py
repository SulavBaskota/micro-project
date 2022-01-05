from rest_framework import serializers
from menu.models import FoodItem
from .models import *
from menu.serializers import FoodItemSerializer


class OrderDetailSerializer(serializers.ModelSerializer):
    itemInfo = FoodItemSerializer(source='foodItemId')

    class Meta:
        model = OrderDetail
        fields = ('itemInfo', 'quantity')


class PendingOrderFlagSerializer(serializers.ModelSerializer):
    items = OrderDetailSerializer(many=True)

    class Meta:
        model = OrderFlag
        fields = ('id', 'tableId', 'pending', 'items')


class UnpaidOrderFlagSerializer(serializers.ModelSerializer):
    items = OrderDetailSerializer(many=True)

    class Meta:
        model = OrderFlag
        fields = ('id', 'tableId', 'paid', 'items')
