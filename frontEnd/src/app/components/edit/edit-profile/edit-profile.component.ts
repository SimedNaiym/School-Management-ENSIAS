import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Prof } from 'src/app/models/prof.models';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
editProfFormGroup!: FormGroup;
  prof!: Prof;

  
  constructor(private profService: ProfServiceService,
    private fb: FormBuilder,
    private router: Router,private route : ActivatedRoute) {
    this.prof=this.router.getCurrentNavigation()?.extras.state as Prof;
  }

  ngOnInit(): void {
    this.editProfFormGroup = this.fb.group({
      prenom: [''],
      nom: [''],
      civilite: [''],
      cne: [''],
      email: [''],
      specialite: [''],
      tel: [''],
      login: [''],
      password: ['']
    });

    this.setFormValues();
  }

  setFormValues() {
    if (this.prof) {
      this.editProfFormGroup.patchValue({
        prenom: this.prof.prenom_Prof,
        nom: this.prof.nom_Prof,
        cne: this.prof.CIN_Prof,
        email: this.prof.email_prof,
        specialite: this.prof.specialite_Prof,
        tel: this.prof.telephone_prof,
        login: this.prof.nom_utilisateur_Prof,
        password: this.prof.mdp_Prof
      });
    }
  }

  handleUpdateProf() {
    if (this.editProfFormGroup.valid && this.prof) {
      const updatedProf: Prof = {
        ...this.prof,
        ...this.editProfFormGroup.value
      };

      this.profService.updateProf(updatedProf.ID_Prof,updatedProf).subscribe((data) => {
         Swal.fire('Succès', 'Profile modifié avec succès', 'success');
        this.router.navigateByUrl('/home');
      });
    }
  }
}
