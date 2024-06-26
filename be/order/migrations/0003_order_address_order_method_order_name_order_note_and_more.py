# Generated by Django 4.1.13 on 2024-04-15 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_order_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='address',
            field=models.CharField(max_length=255, null=True, verbose_name='address'),
        ),
        migrations.AddField(
            model_name='order',
            name='method',
            field=models.CharField(max_length=255, null=True, verbose_name='method'),
        ),
        migrations.AddField(
            model_name='order',
            name='name',
            field=models.CharField(max_length=255, null=True, verbose_name='numberphone'),
        ),
        migrations.AddField(
            model_name='order',
            name='note',
            field=models.CharField(max_length=255, null=True, verbose_name='note'),
        ),
        migrations.AddField(
            model_name='order',
            name='numberphone',
            field=models.CharField(max_length=255, null=True, verbose_name='numberphone'),
        ),
    ]
