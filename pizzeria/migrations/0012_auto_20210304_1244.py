# Generated by Django 3.1.7 on 2021-03-04 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzeria', '0011_auto_20210304_1239'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='size',
            field=models.ManyToManyField(related_name='foods', through='pizzeria.Price', to='pizzeria.Size'),
        ),
        migrations.AlterField(
            model_name='size',
            name='food',
            field=models.ManyToManyField(related_name='sizes', through='pizzeria.Price', to='pizzeria.Food'),
        ),
    ]
