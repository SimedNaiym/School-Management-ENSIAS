from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from projet_si_app.models import Departement,Filiere,Professeur
from projet_si_app.serializers import DepartementSerializer,FiliereSerializer,ProfesseurSerializer

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
        department=Departement.objects.get(DepartmentId=department_data['DepartmentId'])
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
        filiere=Filiere.objects.get(filiere_id=filiere_data['filiere_id'])
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
        professeur=Professeur.objects.get(ID_Prof=professeur_data['DepartmentId'])
        professeur_serializer=ProfesseurSerializer(professeur,data=professeur_data)
        if professeur_serializer.is_valid():
            professeur_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        professeur=Professeur.objects.get(ID_Prof=id)
        professeur.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)