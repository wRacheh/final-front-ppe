import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-all-conge',
  templateUrl: './all-conge.component.html',
  styleUrls: ['./all-conge.component.scss']
})
export class AllCongeComponent implements OnInit {
public congelist :Conge []=[]
currentConge :any;
currentIndex = -1;
public closeResult = '';
  constructor(private modalService: NgbModal,private conge:CongeService ) { }

  ngOnInit(): void {
    this.getConges();
  }

  setActiveConge(_conge:any, index:any): void {
    this.currentConge = _conge;
    this.currentIndex = index;
  }

  deletConge(): void {
    this.conge.deletConge(this.currentConge.idCon)
      .subscribe(
        response => {
        },
        error => {
          console.log(error)
        }
      );
   // location.reload()
  }
  updateConge(): void {
    this.conge.updateConge(this.currentConge.idCon, this.currentConge)
      .subscribe(
        response => {
         this.getConges()
        },
        error => {
          console.log(error);
        }
      )
     
  }
  getConges() {
    this.conge.getAllConge().subscribe(
      res => {
        this.congelist = res
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )

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

}
