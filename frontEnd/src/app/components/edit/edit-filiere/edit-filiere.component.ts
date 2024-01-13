import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {FiliereService} from "../../../services/filiere.service";
import {Filiere} from "../../../models/filieres.models";
@Component({
  selector: 'app-edit-filiere',
  templateUrl: './edit-filiere.component.html',
  styleUrls: ['./edit-filiere.component.css']
})
export class EditFiliereComponent implements OnInit {
  editFiliereFormGroup!: FormGroup;
  filiere!: Filiere;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dpService: FiliereService
  ) {
    this.filiere = this.router.getCurrentNavigation()?.extras.state as Filiere;
  }
  ngOnInit(): void {
    this.editFiliereFormGroup = this.fb.group({
      libelle: [''],
      nombreSem: [''],
      chefFiliere: [''],
      departement: ['']
    });
    this.setFormValues();
  }
  setFormValues() {
    if (this.filiere) {
      this.editFiliereFormGroup.patchValue({
        libelle_Fil: this.filiere.libelle_Fil,
        Abrv_Fil:this.filiere.Abrv_Fil
        // chefFiliere: this.filiere.chef_filiere.id
        // departement: this.filiere.departement.libelle_Dep
      });
    }
  }
  handleUpdateFiliere() {

    if (this.editFiliereFormGroup.valid && this.filiere) {
      const updatedFiliere: Filiere = {
        ...this.filiere,
        ...this.editFiliereFormGroup.value
      };
      this.dpService.updateFiliere(updatedFiliere.filiere_id,updatedFiliere).subscribe((data) => {
          Swal.fire( 'Succès', 'Filiére modifié avec succès','success');
          this.router.navigateByUrl('/filieres');
        }

      );

    }
  }
}
