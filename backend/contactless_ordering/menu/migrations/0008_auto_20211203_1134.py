# Generated by Django 3.2.8 on 2021-12-03 11:34

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0007_auto_20211203_1014'),
    ]

    operations = [
        migrations.CreateModel(
            name='FoodCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=30)),
            ],
            options={
                'verbose_name': 'Food Category',
                'verbose_name_plural': 'Food Category',
            },
        ),
        migrations.CreateModel(
            name='FoodItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0.01)], verbose_name='Price in NPR')),
                ('img', models.ImageField(upload_to='images')),
                ('category', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='menu.foodcategory')),
            ],
            options={
                'verbose_name': 'Food Item',
                'verbose_name_plural': 'Food Item',
            },
        ),
        migrations.DeleteModel(
            name='Menu',
        ),
    ]
