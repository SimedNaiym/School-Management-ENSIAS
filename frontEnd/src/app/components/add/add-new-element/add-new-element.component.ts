import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FiliereService } from '../../../services/filiere.service';
import { Filiere } from '../../../models/filieres.models';
import { Departement } from '../../../models/departement.models';
import { DepartmentService } from '../../../services/department.service';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import { Prof } from 'src/app/models/prof.models';
import { Module } from 'src/app/models/modules.models';
import { ModuleService } from 'src/app/services/module.service';
@Component({
  selector: 'app-add-new-element',
  templateUrl: './add-new-element.component.html',
  styleUrls: ['./add-new-element.component.css']
})
export class AddNewElementComponent {
  newFiliereFormGroup!: FormGroup;
  departements: Module[] = [];

  profs:Prof[]=[]
  constructor(
    private fb: FormBuilder,
    private filiereService: FiliereService,
    private departementService: ModuleService,
    private profService:ProfServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newFiliereFormGroup = this.fb.group({
      libelle: [null, Validators.required],
      module: [null, Validators.required],
    });
    this.departementService.searchModules_().subscribe(
      (response)=>{
        this.departements=response
      }
    )
    this.profService.searchProfs_().subscribe(
      (response)=>{
        
        this.profs=response
      }
    )
  }

  // getDepartements() {
  //   this.departementService.getDepartements().subscribe(
  //     (data: Departement[]) => {
  //       this.departements = data;
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }

  handleAddFiliere() {
    if (this.newFiliereFormGroup.valid) {
      const newFiliere: Filiere = this.newFiliereFormGroup.value;
      this.filiereService.saveFiliere_(newFiliere).subscribe({
        next: () => {
          Swal.fire('Succès', 'Filière ajoutée avec succès', 'success');
          this.router.navigateByUrl('/elementModule');
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    } else {
      Swal.fire(
        'Erreur',
        'Veuillez remplir correctement tous les champs du formulaire',
        'error'
      );
    }
  }
}
