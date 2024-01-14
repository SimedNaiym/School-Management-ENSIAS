from . import views
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    path('allDepartement', views.departmentApi),
    path('allDepartement/<int:id>', views.departmentApi),
    path('allFiliere', views.FiliereApi),
    path('allFiliere/<int:id>', views.FiliereApi),
    path('allProfesseur', views.ProfesseurApi),
    path('allProfesseur/<int:id>', views.ProfesseurApi),
    path('allCategorie', views.CategorieApi),
    path('allCategorie/<int:id>', views.CategorieApi),
    path('allModule', views.ModuleApi),
    path('allModule/<int:id>', views.ModuleApi),
    path('allElement', views.ElementApi),
    path('allElement/<int:id>', views.ElementApi)




]
