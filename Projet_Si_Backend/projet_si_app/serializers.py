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
class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = ['id_cat',
                  'libelle_cat',
                  'volum_hor'
                  ]
class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ['id_module',
                  'libelle_Mod',
                  'id_Prof_CM'
                  ]
class ElementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Element
        fields = ['id_element',
                  'libelle',
                  'module',
                  'volumeHoraire',
                  'profCours',
                  'vhCours',
                  'profTD',
                  'vhTD',
                  'profTP',
                  'vhTP'
                  ]

class SalleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salle
        fields = ['id_salle',
                  'capacite',
                  'lib_salle',
                  'type_salle',
                  'ordinateur',
                  'projecteur',
                  'etat'
                  ]



             