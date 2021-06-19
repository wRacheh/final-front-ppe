import { Component, HostBinding, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Departements } from 'src/app/models/departements';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.scss']
})
export class AddDepartementComponent implements OnInit {
  loading = false;
  private index: number = 0;
  public addFrm: Departements = {};
  public listDepartement: Departements[] = [];
  error=""
  success=""

  @HostBinding('class')
  classes = 'example-items-rows';

  constructor(private toastrService: NbToastrService, private adminService: AdminService) { }

  ngOnInit(): void {
  }
  showToastSuccess(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || 'success',
      this.success,
      { position, status });
  } showToastError(position: any, status: any) {
    //this.index += 1;
    this.toastrService.show(
      status || '',
      this.error,
      { position, status });
  }

  addDepartement() {
    this.adminService.addDepartement(this.addFrm).subscribe(res => {
      this.listDepartement = res;
      setTimeout(() => this.showToastSuccess('top-right', 'success'), 100);
      this.success=res.message
    },
      error => {
        this.error=error.error.message;
        setTimeout(() => this.showToastError('top-right', 'danger'), 100);
      })
  }








}
