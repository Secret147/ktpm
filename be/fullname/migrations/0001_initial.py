# Generated by Django 5.0.1 on 2024-02-20 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FullName',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=255, verbose_name='firstName')),
                ('midName', models.CharField(max_length=255, verbose_name='midName')),
                ('lastName', models.CharField(max_length=255, verbose_name='lastName')),
            ],
        ),
    ]