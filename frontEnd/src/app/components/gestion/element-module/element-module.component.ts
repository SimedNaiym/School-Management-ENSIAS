import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement.models';
import { ElementDeModule } from 'src/app/models/elementModule.models';
import { DepartmentService } from 'src/app/services/department.service';
import { ElementService } from 'src/app/services/element.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-element-module',
  templateUrl: './element-module.component.html',
  styleUrls: ['./element-module.component.css']
})
export class ElementModuleComponent {
  elements: ElementDeModule[] = [];
  errorMessage!: string;
 searchFormGroup!: FormGroup;
 page: number = 0;
 size: number = 6;
 totalPages: number = 0;
 currentPage: number = 0;
 totalelements:number=0;
 displayedPages: number[] = [];
 constructor(
   private departmentService: DepartmentService,
   private elementService:ElementService,
   private fb: FormBuilder,
   private router: Router
 ) {}

 ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
     keyword: this.fb.control('')
   });
   this.elementService.searchProfs_().subscribe(
    (response)=>{
      this.elements=response
      console.log(this.elements)
    }
   )
 }
  handleEditeDepart(departEdit: ElementDeModule) {
   this.router.navigateByUrl('/departements/edit',{state :departEdit});
 }

handleChangeSize($event: Event) {
     this.size = parseInt((<HTMLInputElement>$event.target).value);
     this.handleSearchDepartments();
   }
 handleSearchDepartments(): void {
   this.departmentService
     .searchDepartments(this.searchFormGroup.value.keyword, this.page, this.size)
     .subscribe(
       (data) => {
        //  this.elements = data.content;
         this.totalPages = data.totalPages;
         this.currentPage = data.number;
         this.setDisplayedPages();
       },
       (error) => {
         this.errorMessage = error;
         console.log(error);
       }
     );
 }

 handleDeleteDepartment(element: ElementDeModule): void {
   Swal.fire({
     title: 'Êtes-vous sûr ?',
     text: "Vous ne pourrez pas revenir en arrière !",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Oui, supprimez-le !'
   }).then((result) => {
     if (result.isConfirmed) {
       this.departmentService.deleteDepartment(element.id_element).subscribe();
        this.elements = this.elements.filter((d) => d.id_element !== element.id_element);

     }
   });
 }

 setDisplayedPages(): void {
   this.displayedPages = [];
   const startPage = Math.floor(this.currentPage / 3) * 3;
   for (
     let i = startPage;
     i < startPage + 3 && i < this.totalPages;
     i++
   ) {
     this.displayedPages.push(i);
   }
 }

 gotoPage(page: number): void {
   this.currentPage = page;
   this.page = page;
   this.handleSearchDepartments();
 }

 goToPreviousSet(): void {
   const startPage = Math.floor(this.currentPage / 3) * 3;
   if (startPage - 3 >= 0) {
     this.currentPage = startPage - 3;
     this.page = this.currentPage;
     this.handleSearchDepartments();
   }
 }

 goToNextSet(): void {
   const startPage = Math.floor(this.currentPage / 3) * 3;
   if (startPage + 3 < this.totalPages) {
     this.currentPage = startPage + 3;
     this.page = this.currentPage;
     this.handleSearchDepartments();
   }
 }
}
