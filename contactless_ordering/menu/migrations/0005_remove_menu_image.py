# Generated by Django 3.2.8 on 2021-11-02 02:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_alter_menu_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menu',
            name='image',
        ),
    ]
