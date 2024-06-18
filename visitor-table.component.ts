import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-visitor-table',
  templateUrl: './visitor-table.component.html',
  styleUrl: './visitor-table.component.scss',
})
export class VisitorTableComponent {
  @ViewChild('timeModal') public timeModal: ModalDirective;
  public startDate: any;
  public endDate: any;
  public columnWidths: string[] = [
    '100px',
    '200px',
    '200px',
    '270px',
    '300px',
    '200px',
    '300px',
    '130px',
    '130px',
    '130px',
    '130px',
    '130px',
  ];
  public dataList: any = [];
  public outTime: any = null;
  data: any = {};
  time: any = {};
  addSet: boolean = false;
  selectedType: any;
  editAccess: any;
  addAccess: any;
  currentId:any=0;

  constructor(
    private router: Router,
    private restService: RestService,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  // PostRequest(startDate:string,endDate:string):void{
  //   const url='/com/visitor';
  //   const body={
  //     startDate:"2024-mar-03",
  //     EndDate:"2024-dec-21"
  //   };
  //   this.restService.postModel(url,body).subscribe((data)=>{
  //     this.getData();
  //   });

  fetchData() {
    console.log('XXX');
    if (this.startDate != null && this.endDate != null) {
      const queryParams =
        '?startDate=${this.startDate}&EndDate=${this.endDate}';
      this.restService
        .getModel('http://localhost:8080/com/visitor' + queryParams)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
  dateRangeChange(
    dateRangeStart: HTMLInputElement,
    dateRangeEnd: HTMLInputElement
  ) {
    this.startDate = this.datePipe.transform(
      dateRangeStart.value,
      'yyyy-MM-dd HH:mm:ss'
    );
    this.endDate = this.datePipe.transform(
      dateRangeEnd.value,
      'yyyy-MM-dd HH:mm:ss'
    );
    if (this.startDate != null && this.endDate != null) {
      this.restService
        .getModel(`/com/visitor/${this.startDate}/${this.endDate}`)
        .subscribe((data) => {
          this.dataList = data;
        });
    }
  }
  public previousPage() {
    window.history.back();
  }

  onUpdateOutTime() {
    this.timeModal.hide();
    let obj = { id: this.currentId, outTime: this.outTime };
    console.log(obj)
    this.restService.postModel(obj, '/com/visitor/').subscribe((res) => {
      this.getData();
    });
  }

  getData() {
    this.restService.getModel('/com/visitors').subscribe((data) => {
      this.dataList = data;
    });
  }
  outTimeUpdate(id: any) {
    this.currentId = id;
    console.log(this.currentId);
    this.timeModal.show();
  }
}



