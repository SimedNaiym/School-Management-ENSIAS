from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from projet_si_app.models import Departement,Filiere,Professeur,Categorie,Module,Element,Salle
from projet_si_app.serializers import DepartementSerializer,FiliereSerializer,ProfesseurSerializer,CategorieSerializer,ModuleSerializer,ElementSerializer,SalleSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='GET':
        departments = Departement.objects.all()
        departments_serializer = DepartementSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        department_serializer = DepartementSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
        department_data = JSONParser().parse(request)
        department=Departement.objects.get(id_Dep=id)
        department_serializer=DepartementSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        department=Departement.objects.get(id_Dep=id)
        department.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def FiliereApi(request,id=0):
    if request.method=='GET':
        filieres = Filiere.objects.all()
        filieres_serializer = FiliereSerializer(filieres, many=True)
        return JsonResponse(filieres_serializer.data, safe=False)
    elif request.method=='POST':
        filiere_data=JSONParser().parse(request)
        filiere_serializer = FiliereSerializer(data=filiere_data)
        if filiere_serializer.is_valid():
            filiere_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
        filiere_data = JSONParser().parse(request)
        filiere=Filiere.objects.get(filiere_id=id)
        filiere_serializer=FiliereSerializer(filiere,data=filiere_data)
        if filiere_serializer.is_valid():
            filiere_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        filiere=Filiere.objects.get(filiere_id=id)
        filiere.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def filterProf(request,id=0):
    professeur=Professeur.objects.filter(id_Dep=id)
    professeur_serializer = ProfesseurSerializer(professeur, many=True)
    return JsonResponse(professeur_serializer.data, safe=False)
@csrf_exempt
def filterfil(request,id=0):
    filiere=Filiere.objects.filter(id_Dep=id)
    filiere_serializer = FiliereSerializer(filiere, many=True)
    return JsonResponse(filiere_serializer.data, safe=False)
@csrf_exempt
def ProfesseurApi(request,id=0):
    if request.method=='GET':
        professeur = Professeur.objects.all()
        professeur_serializer = ProfesseurSerializer(professeur, many=True)
        return JsonResponse(professeur_serializer.data, safe=False)
    elif request.method=='POST':
        professeur_data=JSONParser().parse(request)
        professeur_serializer = ProfesseurSerializer(data=professeur_data)
        if professeur_serializer.is_valid():
            professeur_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
        professeur_data = JSONParser().parse(request)
        professeur=Professeur.objects.get(ID_Prof=id)
        professeur_serializer=ProfesseurSerializer(professeur,data=professeur_data)
        if professeur_serializer.is_valid():
            professeur_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        professeur=Professeur.objects.get(ID_Prof=id)
        professeur.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
    
@csrf_exempt
def CategorieApi(request,id=0):
    if request.method=='GET':
        categorie = Categorie.objects.all()
        categorie_serializer = CategorieSerializer(categorie, many=True)
        return JsonResponse(categorie_serializer.data, safe=False)
    elif request.method=='POST':
        categorie_data=JSONParser().parse(request)
        categorie_serializer = CategorieSerializer(data=categorie_data)
        if categorie_serializer.is_valid():
            categorie_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
        categorie_data = JSONParser().parse(request)
        categorie=Categorie.objects.get(id_cat=categorie_data['id_cat'])
        categorie_serializer=CategorieSerializer(categorie,data=categorie_data)
        if categorie_serializer.is_valid():
            categorie_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        categorie=Categorie.objects.get(id_cat=id)
        categorie.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
    
@csrf_exempt
def ModuleApi(request,id=0):
    if request.method=='GET':
        module = Module.objects.all()
        module_serializer = ModuleSerializer(module, many=True)
        return JsonResponse(module_serializer.data, safe=False)
    elif request.method=='POST':
        module_data=JSONParser().parse(request)
        module_serializer = ModuleSerializer(data=module_data)
        if module_serializer.is_valid():
            module_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
        module_data = JSONParser().parse(request)
        module=Module.objects.get(id_module=module_data['id_module'])
        module_serializer=ModuleSerializer(module,data=module_data)
        if module_serializer.is_valid():
            module_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        module=Module.objects.get(id_module=id)
        module.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
    
@csrf_exempt
def ElementApi(request,id=0):
    if request.method=='GET':
        element = Element.objects.all()
        element_serializer = ElementSerializer(element, many=True)
        return JsonResponse(element_serializer.data, safe=False)
    elif request.method=='POST':
        element_data=JSONParser().parse(request)
        element_serializer = ElementSerializer(data=element_data)
        if element_serializer.is_valid():
            element_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
        element_data = JSONParser().parse(request)
        element=Element.objects.get(id_Ele=element_data['id_Ele'])
        element_serializer=ElementSerializer(element,data=element_data)
        if element_serializer.is_valid():
            element_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        element=Element.objects.get(id_Ele=id)
        element.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
    
@csrf_exempt
def SalleApi(request,id=0):
    if request.method=='GET':
        salle = Salle.objects.all()
        salle_serializer = SalleSerializer(salle, many=True)
        return JsonResponse(salle_serializer.data, safe=False)
    elif request.method=='POST':
        salle_data=JSONParser().parse(request)
        salle_serializer = SalleSerializer(data=salle_data)
        if salle_serializer.is_valid():
            salle_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
        salle_data = JSONParser().parse(request)
        salle=Salle.objects.get(id_salle=id)
        salle_serializer=SalleSerializer(salle,data=salle_data)
        if salle_serializer.is_valid():
            salle_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        salle=Salle.objects.get(id_salle=id)
        salle.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
