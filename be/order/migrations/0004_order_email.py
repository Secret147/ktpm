# Generated by Django 4.1.13 on 2024-04-15 01:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_order_address_order_method_order_name_order_note_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='email',
            field=models.CharField(max_length=255, null=True, verbose_name='email'),
        ),
    ]
