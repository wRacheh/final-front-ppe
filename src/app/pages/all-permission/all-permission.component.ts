import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ɵChangeDetectorStatus } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Permission } from 'src/app/models/permission';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-all-permission',
  templateUrl: './all-permission.component.html',
  styleUrls: ['./all-permission.component.scss']
})
export class AllPermissionComponent implements OnInit {
public ListPerm :Permission[]=[]
_permission: any
currentPermission :any;
currentIndex = -1;
public closeResult = '';
public permissionfrm ={
  name:""
}
  constructor(private modalService: NgbModal,private permission:PermissionService ) { }

  ngOnInit(): void {

    this.getAllPermission();
  }



  getAllPermission (){
    this.permission.getAllPermission().subscribe(res=>{
      this.ListPerm=res
    },error=>{
      console.log(error)
    })
  }

  setActivePerm(_perm:any, index:any): void {
    this.currentPermission = _perm;
    this.currentIndex = index;
  }

  updatePermission(): void {
    this.permission.repondrePermission(this.currentPermission.idPer, this.currentPermission)
      .subscribe(
        response => {
         this.getAllPermission();
        },
        error => {
          console.log(error);
        }
      )
     
  }
  deletOnePermission(): void {
    this.permission.deletOnePermission(this.currentPermission.idPer)
      .subscribe(
        response => {
          this.getAllPermission();
        },
        error => {
          console.log(error)
        }
      );
   // location.reload()
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  getPermissionByNameEmployee(){
    this.permission.getPermissionByemployeeName(this.permissionfrm.name).subscribe(
      res=>{
       this.ListPerm=res
      },
      error=>{
        console.log(error)
      }
    )
  }
  refreshlist(){
    this.getAllPermission();
  }
}
