import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { DepartmentComponent } from './department/department.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import{ HolidaysComponent} from './holidays/holidays.component';
import {LeaveSettingsComponent} from './leave-settings/leave-settings.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master',
    },
    children: [
      {
        path: 'area',
        component: AreaComponent,
        data: {
          title: 'Area',
        },
      },  {
        path: 'department',
        component: DepartmentComponent,
        data: {
          title: 'Department',
        },
      },
      {
        path: 'AddEmployee',
        component: AddEmployeeComponent,
        data: {
          title: 'add-employee',
        },
      },
      {
        path: 'employee-table',
        component: EmployeeTableComponent,
        data: {
          title: 'employee-table',
        },
      },
      {
        path: 'holidays',
        component: HolidaysComponent,
        data: {
          title: 'holidays',
        },
      },
      {
        path: 'leavesettings',
        component: LeaveSettingsComponent,
        data: {
          title: 'leaveSettings',
        },
      },
      {
        path: 'create-employee',
        component: CreateEmployeeComponent,
        data: {
          title: 'Create-Employee',
        },
      },
      {
        path: 'emplist',
        component: EmpListComponent,
        data: {
          title: 'EmpList',
        },
      },
      {
        path: 'leaveType',
        component: LeaveTypeComponent,
        data: {
          title: 'Leave Categories',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
