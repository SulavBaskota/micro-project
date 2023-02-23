# Generated by Django 3.2.8 on 2021-12-03 13:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0011_auto_20211203_1254'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='foodcategory',
            options={'verbose_name': 'Food Category', 'verbose_name_plural': 'Food Categories'},
        ),
        migrations.AlterModelOptions(
            name='fooditem',
            options={'verbose_name': 'Food Item', 'verbose_name_plural': 'Food Item'},
        ),
        migrations.RemoveField(
            model_name='fooditem',
            name='category',
        ),
        migrations.AddField(
            model_name='fooditem',
            name='category',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='items', to='menu.foodcategory'),
        ),
    ]
