from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.


class Ingredients(models.Model):
    ingredient = models.CharField(max_length=20)
    menu = models.ForeignKey('Menu', on_delete=models.CASCADE, default=None)

    class Meta:
        verbose_name = 'ingredient'

    def __str__(self):
        return f"#{self.id}"


class Menu(models.Model):
    FOOD_CATEGORY = [
        ('BF', 'Breakfast'),
        ('LU', 'Lunch'),
        ('VG', 'Vegeterian'),
        ('NV', 'Non-Vegeterian'),
        ('SN', 'Snacks'),
    ]

    category = models.CharField(max_length=2, choices=FOOD_CATEGORY)
    item_name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2,
                                verbose_name='Price in NPR', validators=[MinValueValidator(0.01)])
    image = models.ImageField(upload_to='images/', default=None)

    class Meta:
        verbose_name = 'Food Item'
        verbose_name_plural = 'Food Item'

    def __str__(self):
        return self.item_name







