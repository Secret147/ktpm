# Generated by Django 5.0.1 on 2024-02-20 04:57

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('customer', '0001_initial'),
        ('payment', '0001_initial'),
        ('shipment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('totalPrice', models.FloatField()),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('update_at', models.DateTimeField(auto_now=True, null=True)),
                ('customer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='customer.customer')),
                ('payment', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='payment.payment')),
                ('shipment', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='shipment.shipment')),
            ],
        ),
    ]
