import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrl: './add-visitor.component.scss',
})
export class AddVisitorComponent implements OnInit {

  contactForm = new FormGroup({
    visitorName: new FormControl('', [
      Validators.required,
      Validators.maxLength(35),
      Validators.pattern(/^[a-z ,.'-]+$/i),
    ]),
    date: new FormControl(''),

    phoneno: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),

    gender: new FormControl('', [Validators.required]),
    person: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),

    ]),
    authorized: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    department: new FormControl(),
    accessno: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9]{1}[0-9]{2}s?[0-9]{3}$'),
    ]),
    area:new FormControl(),

    purpose: new FormControl('', [Validators.required]),
    inTime: new FormControl('', [Validators.required]),

  });
  dataList: any = [];
  selectedType: any;
  employeeDataList: any = [];
  departmentMasterList: any = [];
  areaMasterList: any = [];

  maxDate:string;


  get valid() {
    return this.contactForm.controls;
  }

  get errors() {
    return this.contactForm.controls;
  }

  constructor(private router: Router, private restService: RestService) {
    this.maxDate = new Date().toISOString().split('T')[0];
    console.log(this.maxDate)
  }
  ngOnInit(): void {
    this.getMasterData();
    this.getMasterAreaData();
    this.contactForm.get('department')?.disable();
    this.contactForm.get('area')?.disable();

  }
  getMasterData() {
    this.restService.getModel('/user/employee').subscribe((data) => {
      this.employeeDataList = data;
    });
    this.restService.getModel('/dept/department').subscribe((data) => {
      this.departmentMasterList = data;
    });
  }
  getMasterAreaData() {
    this.restService.getModel('/user/employee').subscribe((data) => {
      this.employeeDataList = data;
    });
    this.restService.getModel('/api/area').subscribe((data) => {
      this.areaMasterList = data;
    });
  }

  public onSubmit() {
    console.log(this.contactForm.value);
    this.restService
      .postModel(this.contactForm.getRawValue(), '/com/visitor/add')
      .subscribe(() => {
      });
    this.router.navigate(['/visitor/visitor-table']);
  }

  deleteData() {
    this.restService.getModel('/com/visitor/delete/2').subscribe((data) => {

      console.log(data);
    });
  }
  onChangePerson(data: any) {
    const empDetail = this.employeeDataList.filter((x: any) => x.empid == data);
    console.log(empDetail)
    if (data != null) {
      this.contactForm.get('department')?.setValue(empDetail[0].department);
      this.contactForm.get('area')?.setValue(empDetail[0].area);
    } else {
      this.contactForm.get('department')?.reset();
      this.contactForm.get('area')?.reset();
    }
    this.contactForm.get('department')?.updateValueAndValidity();
    this.contactForm.get('area')?.updateValueAndValidity();
  }



}
