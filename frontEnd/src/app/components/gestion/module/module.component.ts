import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement.models';
import { Module } from 'src/app/models/modules.models';
import { DepartmentService } from 'src/app/services/department.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  modules: Module[] = [];
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
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.searchFormGroup = this.fb.group({
      keyword: this.fb.control('')
    });
    this.handleSearchDepartments();
  }
   handleEditeDepart(departEdit: Module) {
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
          // this.modules = data.content;
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

  handleDeleteDepartment(module: Module): void {
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
        this.departmentService.deleteDepartment(module.id_module).subscribe();
         this.modules = this.modules.filter((d) => d.id_module !== module.id_module);

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
