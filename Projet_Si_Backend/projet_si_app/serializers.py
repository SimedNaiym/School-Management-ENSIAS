from rest_framework import serializers
from projet_si_app.models import *

class ProfesseurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professeur
        fields = ['ID_Prof',
                  'CIN_Prof',
                  'nom_Prof',
                  'prenom_Prof',
                  'email_prof',
                  'telephone_prof',
                  'specialite_Prof',
                  'nom_utilisateur_Prof',
                  'mdp_Prof',
                  'etat_compte_Prof',
                  'Role_Prof',
                  'id_Dep',
                  'id_cat']

class DepartementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departement
        fields = ['id_Dep',
                  'libelle_Dep',
                  'Abrv_Dep']
class FiliereSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filiere
        fields = ['filiere_id',
                  'libelle_Fil',
                  'Abrv_Fil',
                  'id_Dep',
                  'id_CF']


             