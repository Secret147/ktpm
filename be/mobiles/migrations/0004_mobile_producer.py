# Generated by Django 4.1.13 on 2024-04-14 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mobiles', '0003_alter_mobile_description_alter_mobile_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='mobile',
            name='producer',
            field=models.CharField(max_length=1000, null=True, verbose_name='Producer'),
        ),
    ]
