# Generated by Django 3.2.9 on 2021-12-02 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_infopill_sungbun'),
    ]

    operations = [
        migrations.AlterField(
            model_name='infopill',
            name='sungbun',
            field=models.CharField(max_length=200),
        ),
    ]