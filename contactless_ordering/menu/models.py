from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.


class FoodCategory(models.Model):
    category = models.CharField(max_length=30, unique=True)

    class Meta:
        verbose_name = 'Food Category'
        verbose_name_plural = 'Food Categories'

    def __str__(self):
        return self.category


class FoodItem(models.Model):
    name = models.CharField(max_length=50, unique=True)
    category = models.ManyToManyField(FoodCategory, related_name='foodItems')
    price = models.DecimalField(max_digits=10, decimal_places=2,
                                verbose_name='Price in NPR', validators=[MinValueValidator(0.01)])
    img = models.ImageField(upload_to='images', verbose_name='Image')

    class Meta:
        verbose_name = 'Food Item'
        verbose_name_plural = 'Food Items'

    def __str__(self):
        return self.name
