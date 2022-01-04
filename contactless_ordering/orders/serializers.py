from rest_framework import serializers
from menu.models import FoodItem
from .models import *
from menu.serializers import FoodItemSerializer


class OrderDetailsSerializer(serializers.ModelSerializer):
    itemInfo = FoodItemSerializer(source='foodItemId')

    class Meta:
        model = OrderDetails
        fields = ('itemInfo', 'quantity')


class PendingOrderFlagsSerializer(serializers.ModelSerializer):
    items = OrderDetailsSerializer(many=True)

    class Meta:
        model = OrderFlags
        fields = ('id', 'tableId', 'pending', 'items')


class UnpaidOrderFlagsSerializer(serializers.ModelSerializer):
    items = OrderDetailsSerializer(many=True)

    class Meta:
        model = OrderFlags
        fields = ('id', 'tableId', 'paid', 'items')
