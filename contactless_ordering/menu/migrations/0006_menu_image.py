# Generated by Django 3.2.8 on 2021-11-02 03:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0005_remove_menu_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='image',
            field=models.ImageField(default=None, upload_to='uploads/'),
        ),
    ]
