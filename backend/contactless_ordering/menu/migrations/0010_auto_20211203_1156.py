# Generated by Django 3.2.8 on 2021-12-03 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0009_alter_fooditem_category'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='foodcategory',
            options={'verbose_name': 'Food Category', 'verbose_name_plural': 'Food Categories'},
        ),
        migrations.AlterField(
            model_name='fooditem',
            name='img',
            field=models.ImageField(upload_to='images', verbose_name='Image'),
        ),
    ]
