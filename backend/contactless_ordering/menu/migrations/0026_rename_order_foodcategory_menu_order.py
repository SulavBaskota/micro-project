# Generated by Django 3.2.8 on 2022-01-10 13:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0025_foodcategory_order'),
    ]

    operations = [
        migrations.RenameField(
            model_name='foodcategory',
            old_name='order',
            new_name='menu_order',
        ),
    ]
