from django.contrib import admin
from .models import *
# Register your models here.


class FoodItemInline(admin.StackedInline):
    model = FoodItem


class FoodCategoryAdmin(admin.ModelAdmin):
    model = FoodCategory
    inlines = [FoodItemInline]


admin.site.register(FoodCategory, FoodCategoryAdmin)
