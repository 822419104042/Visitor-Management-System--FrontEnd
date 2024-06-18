import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder,} from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
})
export class AddEmployeeComponent implements OnInit {
  public employeeForm!: FormGroup;
  dataList: any = [];
  selectedType: any;
 
public departmentMasterList:any=[];
  public areaMasterList: any[] = [];
  maxDate:string; 
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private restService: RestService
  ) {
    this.maxDate = new Date().toISOString().split('T')[0];
    console.log(this.maxDate)
  }

  ngOnInit(): void {
    this.getMasterData();
    this.getMasterAreaData();
    this.loadFormGroup();
    
  }
  loadFormGroup() {
    this.employeeForm = this.formBuilder.group({
      id: [''],
      username: ['', [Validators.required, Validators.maxLength(255)]],
      department:['',Validators.required],
      area:['',Validators.required],
      joiningdate: [''],
      mailId: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'
          ),
        ],
      ],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      
    });
    
  }

  get valid() {
    return this.employeeForm.controls;
  }

  get errors() {
    return this.employeeForm.controls;
  }
getMasterData(){
  this.restService.getModel('/dept/department').subscribe((data) => {
    this.departmentMasterList = data;
  });
}
getMasterAreaData(){
  this.restService.getModel('/api/area').subscribe((data) => {
    this.areaMasterList = data;
  });
}
  public onSubmit() {
    this.restService
      .postModel(this.employeeForm.value, '/user/employee/add')
      .subscribe(() => {
        this.router.navigate(['/master/employee-table']);
      });
    console.log(this.employeeForm)  
  }
 
}
