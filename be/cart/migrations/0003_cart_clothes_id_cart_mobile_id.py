# Generated by Django 4.1.13 on 2024-04-12 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0002_cart_book_id_cart_customer_cart_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='clothes_id',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='cart',
            name='mobile_id',
            field=models.IntegerField(null=True),
        ),
    ]
