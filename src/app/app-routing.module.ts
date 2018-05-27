import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatatableComponent} from '../app/datatable/datatable.component';
import {FileuploadComponent} from '../app/fileupload/fileupload.component';


const routes: Routes = [
  { path: '', redirectTo: '/library', pathMatch: 'full' },
  { path: 'library', component: DatatableComponent },
  { path: 'csv', component: FileuploadComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}