import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { VisitorTableComponent } from './visitor-table/visitor-table.component';


const routes: Routes = [


  {
    path: '',
    data: {
      title: 'visitor',
    },
    children: [
      {
        path: 'addVisitor',
        component: AddVisitorComponent,
        data: {
          title: 'AddVisitor',
        },
      },

      {
        path: 'visitor-table',
        component: VisitorTableComponent,
        data: {
          title: 'Visitor',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
