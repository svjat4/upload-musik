# Generated by Django 3.2.10 on 2023-12-15 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0003_song_public'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='public',
            field=models.BooleanField(default=True),
        ),
    ]
