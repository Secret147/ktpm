# Generated by Django 4.1.13 on 2024-02-27 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='update_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
