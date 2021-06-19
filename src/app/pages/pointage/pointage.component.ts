import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { error } from 'protractor';
import { Employee } from 'src/app/models/employee';
import { Pointage } from 'src/app/models/pointage';
import { AdminService } from 'src/app/services/admin.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.scss']
})
export class PointageComponent implements OnInit {
  public pointagefrm: Pointage = {}
  _employee: Employee = {}
  myDate = new Date();
  myDate1: any;
  myDate2: any;
  constructor(private router: Router, private toastrService: NbToastrService, private datePipe: DatePipe, private pointage: AdminService, private token: TokenStorageService) {
    this.myDate1 = this.datePipe.transform(this.myDate.toISOString().substring(0, 10), "yyyy-MM-dd");

  }

  ngOnInit(): void {
  }

  pointer() {
    const data = {
      datePoin: this.myDate1,
      heureEntree: new Date(),
      employee: this._employee
    }
    this.pointage.pointer(data, this.pointagefrm.code)
      .subscribe(
        res => {
          setTimeout(() => this.showToastSuccess('top-right', 'success'), 100);
          this.router.navigate(["/login"])
        },
        error => {
          console.log(error);
          setTimeout(() => this.showToastError('top-right', 'danger'), 100);
        }
      )
  }











  showToastSuccess(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'success',
      `Pointage réussie`,
      { position, status });
  }


  showToastError(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'danger',
      `Code Incorrect !`,
      { position, status });
  }
}
