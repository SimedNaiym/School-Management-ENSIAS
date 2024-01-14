# Generated by Django 5.0.1 on 2024-01-14 13:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categorie',
            fields=[
                ('id_cat', models.AutoField(primary_key=True, serialize=False)),
                ('libelle_cat', models.CharField(max_length=255)),
                ('volum_hor', models.BigIntegerField()),
            ],
            options={
                'db_table': 'Categorie',
            },
        ),
        migrations.CreateModel(
            name='Departement',
            fields=[
                ('id_Dep', models.AutoField(primary_key=True, serialize=False)),
                ('libelle_Dep', models.CharField(max_length=255)),
                ('Abrv_Dep', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'Departement',
            },
        ),
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id_module', models.AutoField(primary_key=True, serialize=False)),
                ('libelle_Mod', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'Module',
            },
        ),
        migrations.CreateModel(
            name='Element',
            fields=[
                ('id_Ele', models.AutoField(primary_key=True, serialize=False)),
                ('libelle_Ele', models.CharField(max_length=255)),
                ('id_module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projet_si_app.module')),
            ],
            options={
                'db_table': 'Element',
            },
        ),
        migrations.CreateModel(
            name='Professeur',
            fields=[
                ('ID_Prof', models.AutoField(primary_key=True, serialize=False)),
                ('CIN_Prof', models.CharField(max_length=255)),
                ('nom_Prof', models.CharField(max_length=255)),
                ('prenom_Prof', models.CharField(max_length=255)),
                ('email_prof', models.EmailField(max_length=254)),
                ('telephone_prof', models.CharField(max_length=15)),
                ('specialite_Prof', models.CharField(max_length=255)),
                ('nom_utilisateur_Prof', models.CharField(max_length=255)),
                ('mdp_Prof', models.CharField(max_length=255)),
                ('etat_compte_Prof', models.CharField(max_length=255)),
                ('Role_Prof', models.CharField(max_length=255)),
                ('id_Dep', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projet_si_app.departement')),
                ('id_cat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projet_si_app.categorie')),
            ],
            options={
                'db_table': 'Professeur',
                'ordering': ['nom_Prof', 'prenom_Prof'],
            },
        ),
        migrations.AddField(
            model_name='module',
            name='id_Prof_CM',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projet_si_app.professeur'),
        ),
        migrations.CreateModel(
            name='Filiere',
            fields=[
                ('filiere_id', models.AutoField(primary_key=True, serialize=False)),
                ('libelle_Fil', models.CharField(max_length=255)),
                ('Abrv_Fil', models.CharField(max_length=255)),
                ('id_Dep', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projet_si_app.departement')),
                ('id_CF', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projet_si_app.professeur')),
            ],
            options={
                'db_table': 'Filiere',
            },
        ),
    ]
