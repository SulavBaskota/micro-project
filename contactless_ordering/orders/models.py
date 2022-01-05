from django.db import models
from menu.models import FoodItem
# Create your models here.


class OrderDetail(models.Model):
    orderId = models.ForeignKey('OrderFlag', on_delete=models.CASCADE, related_name='items')
    foodItemId = models.ForeignKey(
        FoodItem, on_delete=models.CASCADE, related_name='itemInfo')
    quantity = models.IntegerField()

    class Meta:
        verbose_name: 'Order Detail'
        verbose_name_plural: 'Order Details'
    

    def __str__(self):
        return str(self.orderId) + ', ' + str(self.foodItemId)


class OrderFlag(models.Model):
    tableId = models.CharField(max_length=2)
    pending = models.BooleanField(default=True)
    paid = models.BooleanField(default=False)

    class Meta:
        verbose_name: 'Order Flag'
        verbose_name_plural: 'Order Flags'
    

    def __str__(self):
        return "Order Number: " + str(self.id)
