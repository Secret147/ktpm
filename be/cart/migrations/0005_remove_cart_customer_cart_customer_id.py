# Generated by Django 4.1.13 on 2024-04-18 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0004_alter_cart_total'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='customer',
        ),
        migrations.AddField(
            model_name='cart',
            name='customer_id',
            field=models.CharField(max_length=255, null=True, verbose_name='customerid'),
        ),
    ]