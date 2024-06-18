import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm!: FormGroup;
  dataList: any = [];
  selectedType: any;
  public departmentMasterList:any=[];
  maxDate?:string; 
  constructor(private router: Router,private formBuilder: FormBuilder,private restService: RestService) 
  {
    const today=new Date();
    this.maxDate = today.toISOString().split('T')[0];
    console.log(this.maxDate)
    this.employeeForm = this.formBuilder.group({
      id: [''],
      firstname: ['', [Validators.required, Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.maxLength(5)]],
      dob:[''],
      gender: ['', [Validators.required]],
      group:['', [Validators.required]],
      address: ['', [Validators.required]],
      department:['',Validators.required],
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
  ngOnInit():void{
    this.loadFormGroup();
    this.getMasterData();
   
  }
  
  loadFormGroup() {}
  get valid(){
    return this.employeeForm.controls;
  }

  get errors(){
    return this.employeeForm.controls;
  }
  getMasterData(){
    this.restService.getModel('/dept/department').subscribe((data) => {
      this.departmentMasterList = data;
    });
  }
   public onSubmit(){
    //  if(this.employeeForm.invalid){
    //    alert("invalid")
    //    return ;
    //  }
    this.restService
    .postModel(this.employeeForm.value, '/emp/emp/add')
    .subscribe(() => {
      this.router.navigate(['master/emplist']);
    });
    console.log(this.employeeForm)
  }
}



