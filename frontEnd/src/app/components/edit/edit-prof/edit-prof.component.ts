import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prof } from 'src/app/models/prof.models';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.css']
})
export class EditProfComponent implements OnInit {
  editProfFormGroup!: FormGroup;
  prof!: Prof;

  
  constructor(private profService: ProfServiceService,
    private fb: FormBuilder,
    private router: Router,private route : ActivatedRoute) {
    this.prof=this.router.getCurrentNavigation()?.extras.state as Prof;
  }

  ngOnInit(): void {
    this.editProfFormGroup = this.fb.group({
      nom_Prof: [''],
      prenom_Prof: [''],
      CIN_Prof: [''],
      email_prof: [''],
      telephone_prof: [''],
      specialite_Prof: [''],
      nom_utilisateur_Prof: [''],
      mdp_Prof: [''],
      etat_compte_Prof: [''],
      Role_Prof: [''],
      id_Dep: [''],
      id_cat: ['']
    });

    this.setFormValues();
  }

  setFormValues() {
    if (this.prof) {
      this.editProfFormGroup.patchValue({
        prenom_Prof: this.prof.prenom_Prof,
        nom_Prof: this.prof.nom_Prof,
        CIN_Prof: this.prof.CIN_Prof,
        email_prof: this.prof.email_prof,
        specialite_Prof: this.prof.specialite_Prof,
        telephone_prof: this.prof.telephone_prof,
        nom_utilisateur_Prof: this.prof.nom_utilisateur_Prof,
        mdp_Prof: this.prof.mdp_Prof,
        Role_Prof:this.prof.Role_Prof,
        etat_compte_Prof:this.prof.etat_compte_Prof,
        id_Dep:this.prof.id_Dep,
        id_cat:this.prof.id_cat
      });
    }
  }

  handleUpdateProf() {
    if (this.editProfFormGroup.valid && this.prof) {
      const updatedProf: Prof = {
        ...this.prof,
        ...this.editProfFormGroup.value
      };

      this.profService.updateProf_(updatedProf.ID_Prof,updatedProf).subscribe((data) => {
         Swal.fire('Succès', 'Professeur modifié avec succès', 'success');
        this.router.navigateByUrl('/profs');
      });
    }
  }
}
