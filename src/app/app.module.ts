import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from '../app/api-service.service';


import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { FileuploadComponent } from './fileupload/fileupload.component';
import {FileUploadModule,InputTextModule,PasswordModule} from 'primeng/primeng';
import {DialogModule,InputTextareaModule,KeyFilterModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MenubarModule,MenuItem,DropdownModule,SelectItem} from 'primeng/primeng';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app/app-routing.module';
import {AuthenticationService} from '../app/authentication.service';
import { CompositionDetailComponent } from './composition-detail/composition-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    FileuploadComponent,
    NavbarComponent,
    CompositionDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    ButtonModule,
    FileUploadModule,
    InputTextareaModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    DropdownModule,
    KeyFilterModule
    
  ],
  providers: [AuthenticationService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
