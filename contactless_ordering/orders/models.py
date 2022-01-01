from django.db import models
from menu.models import FoodItem
# Create your models here.


class OrderDetails(models.Model):
    orderId = models.ForeignKey('OrderFlags', on_delete=models.CASCADE)
    foodItemId = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    quantity = models.IntegerField()


class OrderFlags(models.Model):
    tableId = models.CharField(max_length=2)
    pending = models.BooleanField(default=True)
    completed = models.BooleanField(default=False)
    paid = models.BooleanField(default=False)
