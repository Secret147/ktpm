# Generated by Django 4.1.13 on 2024-04-14 03:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mobiles', '0005_alter_mobile_producer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mobile',
            name='publisher',
        ),
    ]