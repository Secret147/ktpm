# Generated by Django 4.1.13 on 2024-04-13 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0002_remove_customer_total_customer_password_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='address',
            field=models.CharField(max_length=255, null=True, verbose_name='address'),
        ),
        migrations.AddField(
            model_name='customer',
            name='email',
            field=models.CharField(max_length=255, null=True, verbose_name='email'),
        ),
    ]
