import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.scss'
})
export class EmpListComponent {
  
  public columnWidths: string[] = [
    '100px',
    '200px',
    '200px',
    '200px',


  ];
  public list:any=[];
  constructor(private router: Router, private restService: RestService) {}

  ngOnInit(): void {
    this.getData();
   
  }
  public previousPage() {
    window.history.back();
  }
  getData() {
    this.restService.getModel('/emp/getEmp').subscribe((data) => {
     this.list=data;
    });
  }

}
