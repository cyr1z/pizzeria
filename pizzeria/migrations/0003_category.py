# Generated by Django 3.1.7 on 2021-02-27 19:12

import autoslug.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzeria', '0002_auto_20210227_2012'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('size_name', models.CharField(max_length=120)),
                ('size_unit', models.CharField(max_length=30)),
                ('description', models.TextField(blank=True, max_length=100000, null=True)),
                ('image', models.ImageField(blank=True, default='static/category.png', null=True, upload_to='categories_images/', verbose_name='Image')),
                ('is_published', models.BooleanField(default=True)),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='unicode_title')),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
    ]
