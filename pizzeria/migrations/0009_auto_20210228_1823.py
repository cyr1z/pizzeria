# Generated by Django 3.1.7 on 2021-02-28 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzeria', '0008_auto_20210228_1820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sitesettings',
            name='facebook_link',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Facebook link'),
        ),
    ]
