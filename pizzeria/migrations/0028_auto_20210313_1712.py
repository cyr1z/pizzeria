# Generated by Django 3.1.7 on 2021-03-13 15:12

from django.db import migrations, models
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('pizzeria', '0027_auto_20210313_1153'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='is_spicy',
            field=models.BooleanField(default=False, verbose_name='Is spicy'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='saturday_work_finish',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Saturday work finish'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='saturday_work_start',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Saturday work start'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='sunday_work_finish',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Sunday work finish'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='sunday_work_start',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='Sunday work start'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='weekday_work_finish',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='weekday work finish'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='weekday_work_start',
            field=models.CharField(blank=True, max_length=10, null=True, verbose_name='weekday work start'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='welcome_text',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='welcome text'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='welcome_text_en',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='welcome text'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='welcome_text_ru',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='welcome text'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='welcome_text_uk',
            field=django_quill.fields.QuillField(blank=True, null=True, verbose_name='welcome text'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='welcome_title',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='welcome title'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='welcome_title_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='welcome title'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='welcome_title_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='welcome title'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='welcome_title_uk',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='welcome title'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='working_time_text',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Working time text'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='working_time_text_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Working time text'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='working_time_text_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Working time text'),
        ),
        migrations.AddField(
            model_name='sitesettings',
            name='working_time_text_uk',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Working time text'),
        ),
    ]
