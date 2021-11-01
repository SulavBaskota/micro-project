from django.contrib import admin
from .models import *
# Register your models here.

class IngredientsInline(admin.StackedInline):
    model = Ingredients

class MenuAdmin(admin.ModelAdmin):
    model = Menu
    inlines = [IngredientsInline]

admin.site.register(Menu, MenuAdmin)