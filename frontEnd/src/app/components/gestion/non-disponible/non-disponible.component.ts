
import { Component, OnInit } from '@angular/core';
import { NonDesponibilitie } from 'src/app/models/nonDisponibilites.models';


@Component({
  selector: 'app-non-disponible',
  templateUrl: './non-disponible.component.html',
  styleUrls: ['./non-disponible.component.css']
})
export class NonDisponibleComponent {

  nonDispos: NonDesponibilitie[] = [
    {
      id: 1,
      jour: 'Lundi',
      enseignant: {
        ID_Prof: 1, nom_Prof: 'Ahmed', prenom_Prof: 'Ahmed',
        telephone_prof: '',
        CIN_Prof: '',
        email_prof: '',
        nom_utilisateur_Prof: '',
        mdp_Prof: '',
        specialite_Prof: '',
        Role_Prof: '',
        etat_compte_Prof: '',
        id_Dep: 0,
        id_cat: 0
      },
      periode: '8h-10h'
    },
    {
      id: 2,
      jour: 'Mardi',
       enseignant: {
         ID_Prof: 1, nom_Prof: 'Ahmed', prenom_Prof: 'Ahmed',
         telephone_prof: '',
         CIN_Prof: '',
         email_prof: '',
         nom_utilisateur_Prof: '',
         mdp_Prof: '',
         specialite_Prof: '',
         Role_Prof: '',
         etat_compte_Prof: '',
         id_Dep: 0,
         id_cat: 0
       },
      periode: '8h-10h'
    },
    {
      id: 3,
      jour: 'Mercredi',
       enseignant: {
         ID_Prof: 1, nom_Prof: 'Ahmed', prenom_Prof: 'Ahmed',
         telephone_prof: '',
         CIN_Prof: '',
         email_prof: '',
         nom_utilisateur_Prof: '',
         mdp_Prof: '',
         specialite_Prof: '',
         Role_Prof: '',
         etat_compte_Prof: '',
         id_Dep: 0,
         id_cat: 0
       },
      periode: '8h-10h'
    },
    {
      id: 4,
      jour: 'Jeudi',
       enseignant: {
         ID_Prof: 1, nom_Prof: 'Ahmed', prenom_Prof: 'Ahmed',
         telephone_prof: '',
         CIN_Prof: '',
         email_prof: '',
         nom_utilisateur_Prof: '',
         mdp_Prof: '',
         specialite_Prof: '',
         Role_Prof: '',
         etat_compte_Prof: '',
         id_Dep: 0,
         id_cat: 0
       },
      periode: '8h-10h'
    },
  ];

   gotoPage(page: number): void {
   
  }

  goToPreviousSet(): void {
   
  }

  goToNextSet(): void {
   }
}
