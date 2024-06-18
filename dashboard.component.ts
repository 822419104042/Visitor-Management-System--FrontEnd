import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { RestService } from 'src/app/rest.service';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public dataList: any = [];
  public totalVisitor: any = 0;
  public totalEmploye:any=0;
  public totalDepartment:any=0;
  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService.getModel(`/com/visitors`).subscribe((data) => {
      this.dataList = data;
      console.log(this.dataList);
      this.totalVisitor = this.dataList.length;
    });
    this.restService.getModel(`/user/employee`).subscribe((data) => {
        this.dataList = data;
        console.log(this.dataList)
        this.totalEmploye= this.dataList.length;
      });
    this.restService.getModel(`/dept/department`).subscribe((data) => {
        this.dataList = data;
        console.log(this.dataList)
        this.totalDepartment= this.dataList.length;
      });
    
  }
  
}
