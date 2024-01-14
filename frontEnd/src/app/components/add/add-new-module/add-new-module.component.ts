import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FiliereService } from '../../../services/filiere.service';
import { Filiere } from '../../../models/filieres.models';
import { Departement } from '../../../models/departement.models';
import { DepartmentService } from '../../../services/department.service';
import { Prof } from 'src/app/models/prof.models';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import { ModuleService } from 'src/app/services/module.service';
import { Module } from 'src/app/models/modules.models';

@Component({
  selector: 'app-add-new-module',
  templateUrl: './add-new-module.component.html',
  styleUrls: ['./add-new-module.component.css']
})
export class AddNewModuleComponent {
  newFiliereFormGroup!: FormGroup;
  profs: Prof[] = [];

  constructor(
    private fb: FormBuilder,
    private moduleService: ModuleService,
    private departementService: DepartmentService,
    private profService:ProfServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newFiliereFormGroup = this.fb.group({
      libelle_Mod: [null, Validators.required],
      id_Prof_CM: [null, Validators.required],
    });
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

  handleAddModule() {
    if (this.newFiliereFormGroup.valid) {
      const newFiliere: Module = this.newFiliereFormGroup.value;
      this.moduleService.saveModule_(newFiliere).subscribe({
        next: () => {
          Swal.fire('Succès', 'Filière ajoutée avec succès', 'success');
          this.router.navigateByUrl('/filieres');
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
