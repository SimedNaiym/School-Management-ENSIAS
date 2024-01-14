import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {FiliereService} from "../../../services/filiere.service";
import {Filiere} from "../../../models/filieres.models";
import { Departement } from 'src/app/models/departement.models';
import { Prof } from 'src/app/models/prof.models';
import { DepartmentService } from 'src/app/services/department.service';
import { ProfServiceService } from 'src/app/services/prof-service.service';
@Component({
  selector: 'app-edit-filiere',
  templateUrl: './edit-filiere.component.html',
  styleUrls: ['./edit-filiere.component.css']
})
export class EditFiliereComponent implements OnInit {
  editFiliereFormGroup!: FormGroup;
  filiere!: Filiere;
  departements: Departement[] = [];
  profs:Prof[]=[]
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dpService: FiliereService,
    private departementService: DepartmentService,
    private profService:ProfServiceService,
  ) {
    this.filiere = this.router.getCurrentNavigation()?.extras.state as Filiere;
  }
  ngOnInit(): void {
    this.editFiliereFormGroup = this.fb.group({
      libelle_Fil: [''],
      Abrv_Fil: [''],
      id_Dep: [''],
      id_CF: [''],
    });
    this.departementService.searchDepartments_().subscribe(
      (response)=>{
        this.departements=response
      }
    )
    this.profService.searchProfs_().subscribe(
      (response)=>{
        this.profs=response
      }
    )
    this.setFormValues();
  }
  setFormValues() {
    if (this.filiere) {
      this.editFiliereFormGroup.patchValue({
        libelle_Fil: this.filiere.libelle_Fil,
        Abrv_Fil:this.filiere.Abrv_Fil,
        chefFiliere: this.filiere.id_CF,
        departement: this.filiere.id_Dep
      });
    }
  }
  handleUpdateFiliere() {

    if (this.editFiliereFormGroup.valid && this.filiere) {
      const updatedFiliere: Filiere = {
        ...this.filiere,
        ...this.editFiliereFormGroup.value
      };
      this.dpService.updateFiliere_(updatedFiliere.filiere_id,updatedFiliere).subscribe((data) => {
          Swal.fire( 'Succès', 'Filiére modifié avec succès','success');
          this.router.navigateByUrl('/filieres');
        }

      );

    }
  }
}
