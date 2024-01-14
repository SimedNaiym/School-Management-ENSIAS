from django.contrib import admin
# dans votre_app/admin.py
from .models import Professeur, Departement, Filiere, Module, Element, Categorie,Salle

# Register your models here.
admin.site.register(Departement)
admin.site.register(Categorie)
admin.site.register(Professeur)
admin.site.register(Filiere)
admin.site.register(Module)
admin.site.register(Element)
admin.site.register(Salle)

