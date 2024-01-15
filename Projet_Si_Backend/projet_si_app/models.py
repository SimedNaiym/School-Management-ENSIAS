from django.db import models


class Departement(models.Model):
    id_Dep = models.AutoField(primary_key=True)
    libelle_Dep = models.CharField(max_length=255)
    Abrv_Dep = models.CharField(max_length=255)

    class Meta:
        db_table = 'Departement'  # Nom de la table dans la base de données

    # def __str__(self):
    #     return self.libelle_Dep


class Categorie(models.Model):
    id_cat = models.AutoField(primary_key=True)
    libelle_cat = models.CharField(max_length=255)  # Assurez-vous d'utiliser le type de champ approprié
    volum_hor = models.BigIntegerField()

    class Meta:
        db_table = 'Categorie'


class Professeur(models.Model):
        #AutoField représente la clé primaire avec auto-incrémentation.
        #primary_key=True est utilisé pour déclarer CNE_Prof comme clé primaire.
        ID_Prof = models.AutoField(primary_key=True)
        CIN_Prof = models.CharField(max_length=255)
        #CharField, EmailField, et BigIntegerField définit
        #les types de donnée en fonc des types de données SQL correspondants.
        nom_Prof = models.CharField(max_length=255)
        prenom_Prof = models.CharField(max_length=255)
        email_prof = models.EmailField()
        telephone_prof = models.CharField(max_length=15)
        specialite_Prof = models.CharField(max_length=255)
        nom_utilisateur_Prof = models.CharField(max_length=255)
        mdp_Prof = models.CharField(max_length=255)
        etat_compte_Prof = models.CharField(max_length=255)
        Role_Prof = models.CharField(max_length=255)
        id_Dep = models.ForeignKey('Departement', on_delete=models.CASCADE)
        id_cat = models.ForeignKey('Categorie', on_delete=models.CASCADE)



        class Meta:
            db_table = 'Professeur'  # Nom de la table dans la base de données
            ordering = ['nom_Prof', 'prenom_Prof']  # Ordre de tri par défaut

    #__str__ Définit la représent. de chaîne de l'objet Professeur. 
    #Vous pouvez personnaliser cela selon vos préférences.
    # def __str__(self):
    #     return f"{self.prenom_Prof} {self.nom_Prof}"



class Filiere(models.Model):
    filiere_id = models.AutoField(primary_key=True)
    libelle_Fil = models.CharField(max_length=255)
    Abrv_Fil = models.CharField(max_length=255)
    id_Dep = models.ForeignKey('Departement', on_delete=models.CASCADE)
    id_CF = models.ForeignKey('Professeur', on_delete=models.CASCADE)

    class Meta:
        db_table = 'Filiere'  # Nom de la table dans la base de données

    # def __str__(self):
    #     return self.libelle_Fil


class Module(models.Model):
    id_module = models.AutoField(primary_key=True)
    libelle_Mod = models.CharField(max_length=255)
    id_Prof_CM = models.ForeignKey('Professeur', on_delete=models.CASCADE)


    class Meta:
        db_table = 'Module'  # Nom de la table dans la base de données

    # def __str__(self):
    #     return self.libelle_Mod
         

class Element(models.Model):

    id_element=models.AutoField(primary_key=True)
    libelle=models.CharField(max_length=255)
    module=models.ForeignKey('Module', on_delete=models.CASCADE)
    vhCours=models.BigIntegerField()
    vhTD=models.BigIntegerField()
    vhTP=models.BigIntegerField()

    class Meta:
        db_table = 'Element'  # Nom de la table dans la base de données

   
class Salle(models.Model):
    id_salle = models.AutoField(primary_key=True)
    capacite = models.IntegerField()
    lib_salle = models.CharField(max_length=255)
    type_salle = models.CharField(max_length=255)
    ordinateur = models.IntegerField()
    projecteur = models.IntegerField()
    etat=models.CharField(max_length=255)

    # def __str__(self):
    #     return self.libelle_Salle
        
