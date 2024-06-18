import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss'
})
export class AreaComponent implements OnInit {
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

  onSave(data: any) {
    this.restService
      .postModel(data, '/api/area/add')
      .subscribe(() => {
        this.getData();
      });
  }
  getData()
  {
    this.addSet = false;
    this.selectedType = null;
    this.restService.getModel('/api/area').subscribe((data) =>
     {
      this.dataList=data;
      console.log(data)
    });
  }

}
