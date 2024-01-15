import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement.models';
import { Prof } from 'src/app/models/prof.models';
import { DepartmentService } from 'src/app/services/department.service';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-prof',
  templateUrl: './gestion-prof.component.html',
  styleUrls: ['./gestion-prof.component.css']
})
export class GestionProfComponent implements OnInit {

  departements!:Departement[];
  profs!: Prof[];
  searchFormGroup!: FormGroup;
 
  selectedOption!: number;

  
  constructor(
    private profService: ProfServiceService,
    private depService:DepartmentService,
    private fb: FormBuilder,
    private router: Router,
    private cd:ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control('')
    });
    this.profService.searchProfs_().subscribe(
      (respone)=>{
        this.profs=respone
      }
    )
    this.depService.searchDepartments_().subscribe(
      (response)=>{
        this.departements=response
      }
    )
    
  } 
  
  onOptionChange(dep:any) {
    this.profService.getByDep(dep.value).subscribe(
      (response)=>{
        this.profs=response
        console.log(response)
      }
    )
    console.log(dep.value)


  }
  handleEditeProf(profedit: Prof) {
    this.router.navigateByUrl('/profs/edit',{state :profedit});
  }

  handleDeleteProf(prof: Prof) {
  Swal.fire({
    title: 'Vous etes sur?',
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimez-le!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.profService.deleteProf_(prof.ID_Prof).subscribe();;
      this.profs.splice( this.profs.indexOf(prof),1);

    }
  });
}


  
}
