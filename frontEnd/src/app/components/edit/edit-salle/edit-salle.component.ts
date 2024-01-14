import { FormBuilder, FormGroup } from '@angular/forms';
import { Salle } from './../../../models/salles.models';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent {
 editSalleFormGroup!: FormGroup;
  salle!: Salle;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private salleService: SalleService
  ) {
    this.salle = this.router.getCurrentNavigation()?.extras.state as Salle;
  }

  ngOnInit(): void {
    this.editSalleFormGroup = this.fb.group({
      capacite: [''],
      lib_salle: [''],
      type_salle: [''],
      ordinateur: [''],
      projecteur: [''],
      etat: [''],
    });
    this.setFormValues();
  }
  setFormValues() {
    if (this.salle) {
      this.editSalleFormGroup.patchValue({
        capacite: this.salle.capacite,
        lib_salle: this.salle.lib_salle,
        type_salle: this.salle.type_salle,
        ordinateur: this.salle.ordinateur,
        projecteur: this.salle.projecteur,
        etat: this.salle.etat,
      });
    }
  }


  handleUpdateSalle() {
    console.log(this.editSalleFormGroup.value)
    if (this.editSalleFormGroup.valid) {
      this.salleService
        .updateSalle_(this.salle.id_salle, this.editSalleFormGroup.value)
        .subscribe((data) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Salle modifiée avec succès',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigateByUrl('/salles');
        });
    }
    }
  
}
