# Generated by Django 3.2.8 on 2022-01-01 16:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0017_alter_fooditem_name'),
        ('orders', '0004_auto_20220101_1611'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderdetails',
            name='foodItemId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='itemInfo', to='menu.fooditem'),
        ),
    ]
