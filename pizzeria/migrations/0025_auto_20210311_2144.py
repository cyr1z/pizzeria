# Generated by Django 3.1.7 on 2021-03-11 19:44

from django.db import migrations, models
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('pizzeria', '0024_auto_20210311_2141'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sitesettings',
            name='address_en_en',
        ),
        migrations.RemoveField(
            model_name='sitesettings',
            name='address_en_ru',
        ),
        migrations.RemoveField(
            model_name='sitesettings',
            name='address_en_uk',
        ),
        migrations.RemoveField(
            model_name='sitesettings',
            name='contact_about_text_en_en',
        ),
        migrations.RemoveField(
            model_name='sitesettings',
            name='contact_about_text_en_ru',
        ),
        migrations.RemoveField(
            model_name='sitesettings',
            name='contact_about_text_en_uk',
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='address',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='address'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='contact_about_text',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='Contact about text'),
        ),
        migrations.AlterField(
            model_name='sitesettings',
            name='address_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='address'),
        ),
        migrations.AlterField(
            model_name='sitesettings',
            name='address_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='address'),
        ),
        migrations.AlterField(
            model_name='sitesettings',
            name='address_uk',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='address'),
        ),
        migrations.AlterField(
            model_name='sitesettings',
            name='contact_about_text_en',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='Contact about text'),
        ),
        migrations.AlterField(
            model_name='sitesettings',
            name='contact_about_text_ru',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='Contact about text'),
        ),
        migrations.AlterField(
            model_name='sitesettings',
            name='contact_about_text_uk',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='Contact about text'),
        ),
    ]
