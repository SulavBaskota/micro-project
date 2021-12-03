from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import FoodCategory
from rest_framework import status
from .serializers import FoodCategorySerializer
import json

# Create your views here.


class ShowMenu(APIView):
    serializer_class = FoodCategorySerializer

    def get(self, request):
        queryset = FoodCategory.objects.all()
        response = {
            "MenuList": [

            ]
        }
        for query_item in queryset:
            response['MenuList'].append(self.serializer_class(query_item).data)
        return Response(response, status=status.HTTP_200_OK)