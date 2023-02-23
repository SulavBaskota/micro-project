from django.contrib import admin
from .models import *
# Register your models here.


class FoodItemAdmin(admin.ModelAdmin):
    model = FoodItem
    filter_horizontal = ('category',)


admin.site.register(FoodCategory)
admin.site.register(FoodItem, FoodItemAdmin)