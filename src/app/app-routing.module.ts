import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditComponent } from './employee/addedit/addedit.component';
import { ListComponent } from './employee/list/list.component';
import { DepartmentComponent } from './pages/department/department.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'employee/add', component: AddeditComponent },
  { path: 'employee/edit/:id', component: AddeditComponent },
  { path: 'department', component: DepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
