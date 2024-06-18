import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { VisitorRoutingModule } from './visitor-routing.module';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { VisitorTableComponent } from './visitor-table/visitor-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ModalModule } from "ngx-bootstrap/modal";
@NgModule({
  declarations: [AddVisitorComponent, VisitorTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VisitorRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ModalModule
  ],
  providers: [provideNativeDateAdapter(),DatePipe],
})
export class VisitorModule {}
