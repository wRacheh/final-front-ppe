import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'protractor';
import { Departements } from 'src/app/models/departements';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.scss']
})
export class ListDepartementComponent implements OnInit {
  public closeResult = '';
  public listDep:Departements[]=[]
  public updFrm :Departements={};
  currentDep: any;
  currentIndex: any;
  search  = {
    nom :""
  }
  constructor(private toastrService: NbToastrService,private modalService: NgbModal, private admin:AdminService) { }

  ngOnInit(): void {
    this.getAllDepartements();
  }

  deletDep(){
    this.admin.deleteDepartement(this.currentDep.idDep).subscribe(res=>{
      this.getAllDepartements()
    },error=>{
      console.log(error)
    })
  }
  refreshlist(){
    this.getAllDepartements()
  }
  
  getdepartementByName(){
    this.admin.getDepartementByname(this.search.nom).subscribe(res=>{
      this.listDep=res
    })
  }
  
  getAllDepartements(){
    this.admin.getAll().subscribe(res=>{
      this.listDep=res;
    },
    error=>{
      console.log(error)
    }
    )
  }

  setActiveDep(_dep: any, index: any): void {
    this.currentDep = _dep;
    this.currentIndex = index;

  }
  
  updateDepartement(){
    this.admin.updateDepartement(this.currentDep.idDep, this.updFrm).subscribe(res=>{
      
      setTimeout(() => this.showToastUpdateSuccess('top-right', 'success'), 1000);
      this.getAllDepartements()
    },
    error=>{
      console.log(error)
      setTimeout(() => this.showToastUpdateError('top-right', 'danger'), 1000);

    })
  }
  















  showToastSuccess(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'success',
      `departement ajouté avce succées`,
      { position, status });
  } 
   showToastUpdateSuccess(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'success',
      `departement mis a jour avce succées`,
      { position, status });
  } 
  showToastError(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'Error!',
      `Error lors de la creation du département`,
      { position, status });
  }
  showToastUpdateError(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'Error!',
      `Error lors de la mise a jour du département`,
      { position, status });
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }
  
}
