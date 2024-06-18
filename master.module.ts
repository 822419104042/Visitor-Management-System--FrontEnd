import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { AreaComponent } from './area/area.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveSettingsComponent} from './leave-settings/leave-settings.component'

@NgModule({
  declarations: [AreaComponent, DepartmentComponent, EmployeeTableComponent,AddEmployeeComponent,CreateEmployeeComponent,EmpListComponent ,LeaveTypeComponent,HolidaysComponent,LeaveSettingsComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MasterModule {}
