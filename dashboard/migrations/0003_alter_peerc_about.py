# Generated by Django 4.1.6 on 2023-03-15 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_alter_peerc_about'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peerc',
            name='about',
            field=models.TextField(max_length=500),
        ),
    ]
