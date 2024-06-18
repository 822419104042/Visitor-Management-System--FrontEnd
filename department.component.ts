import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-master',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  accessControl: any = {};
  id: number = 0;
  search: any = {};
  data: any = {};
  dataList: any = [];
  selectedType: any;
  addSet: boolean = false;
  p: number = 1;
  q: number = 1;
  editAccess: any;
  addAccess: any;
  constructor(private router: Router, private restService: RestService) {}

  ngOnInit(): void {
    this.getData();

    this.editAccess = 1;
    this.addAccess = 1;
  }

  onadd(): void {
    this.selectedType = null;
    this.addSet = true;
    this.data = {};
  }

  onEdit(type: any): void {
    this.selectedType = type;
    this.addSet = false;
  }
  onaddCancel(): void {
    this.addSet = false;
  }
  onCancel() {
    this.selectedType = null;
  }
  onSave(dept: any) {
    this.restService.postModel(dept, '/dept/department/add').subscribe(() => {
      this.getData();
    });
  }
  getData() {
    this.addSet = false;
    this.selectedType = null;
    this.restService.getModel('/dept/department').subscribe((data) => {
      this.dataList = data;
    });
  }
  // deleteData() {
  //   this.restService.getModel('/api/area/delete/1').subscribe((data) => {
  //     this.getData;
  //     this.dataList = data;
  //   });
  // }

}
