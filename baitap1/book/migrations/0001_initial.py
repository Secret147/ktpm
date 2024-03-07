# Generated by Django 5.0.1 on 2024-01-31 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Name')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('author', models.CharField(max_length=255, verbose_name='Author')),
                ('publisher', models.CharField(max_length=255, verbose_name='Publisher')),
                ('year', models.CharField(max_length=255, verbose_name='Year')),
                ('image', models.CharField(max_length=255, verbose_name='Image')),
                ('description', models.CharField(max_length=255, verbose_name='Description')),
                ('language', models.CharField(max_length=255, verbose_name='language')),
            ],
        ),
    ]
