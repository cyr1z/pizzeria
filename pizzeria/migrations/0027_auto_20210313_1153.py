# Generated by Django 3.1.7 on 2021-03-13 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzeria', '0026_mainpageslide'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainpageslide',
            name='image',
            field=models.ImageField(blank=True, default='static/food.png', null=True, upload_to='slider_images/', verbose_name='Image'),
        ),
    ]