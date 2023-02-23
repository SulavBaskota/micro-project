from rest_framework import serializers
from .models import *


class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = ('id', 'name', 'price', 'img')


class FoodCategorySerializer(serializers.ModelSerializer):
    foodItems = FoodItemSerializer(many=True)

    class Meta:
        model = FoodCategory
        fields = ('category', 'foodItems')
