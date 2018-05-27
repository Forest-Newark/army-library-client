import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenubarModule,MenuItem, MenuItemContent} from 'primeng/primeng';
import {DialogModule,InputTextModule,PasswordModule} from 'primeng/primeng';
import {AuthenticationService} from '../authentication.service';
import {ApiService} from '../api-service.service';
import { saveAs } from 'file-saver/FileSaver';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginUserName: string;
  loginPassword; string;
  items: MenuItem[];
  authitems: MenuItem[];
  authenticatedUser: boolean = false;
  apiUrl = environment.apiUrl;
  

  displayDialog: boolean = false;
  displayCSVUpload: boolean = false;

  popLoginDialog(){
     this.displayDialog = !this.displayDialog;
  }

  login(){
    this.userService.checkUserCredentials(this.loginUserName,this.loginPassword).subscribe(
      data =>{
        if(data === true){
          this.displayDialog = false;
          this.authenticatedUser = true;
          this.userService.userIsAuthenticate();
          sessionStorage.setItem('currentUser',this.loginUserName);
          this.populateMenuBar();

        }
        else {
          alert('bad login');
        }
      }
    )


    // if(this.userService.checkUserCredentials(this.loginUserName,this.loginPassword)){
    //   this.populateMenuBar();
    // };
  

  }

  constructor(private userService: AuthenticationService,private apiService: ApiService,private http: HttpClient) { }

  ngOnInit() {
    this.items =[];
   }
  

  isUserAuthenticated(): boolean {
  
    return this.authenticatedUser
  }

  logout(): void {
    this.authenticatedUser = false;
    this.userService.logoutUser();
    this.items = [];
   
  }

  populateMenuBar(){
      let menuItemOne = {label:'Composition',
                        icon:'fa-file',
                        items: [
                          {label: 'Add', icon: 'fa-plus',command: (event) => {
                            alert('clicked');
                        }}
                      ]
                      };
      let menuItemTwo = {label:'About',icon:'fa-info-circle'};
      let menuItemUtility = {
        label:'Tools',
        icon:'fa-wrench',
        items: [
          {label:'Upload CSV', icon:'fa-upload',command:(event) => {
            this.displayCSVUpload = !this.displayCSVUpload;
          }},
          {label: 'Download CSV', icon: 'fa-download',command:(event)=>{
            // this.apiService.downloadCSV().subscribe(data => this.saveToFileSystem(data)),
            //      error => console.log("Error downloading the file."),
            //      () => console.info("OK");
            // this.saveFile();
            window.open(this.apiUrl+"/downloadCSV", "_blank");

   
          }}
        ]
      }
      //this.items.push(menuItemOne);
      this.items.push(menuItemUtility);
    
  //       this.items = [
  //         {label:'File',
  //         icon:'fa-file',
  //         },
  //     {
  //         label: 'About',
  //         icon: 'fa-info-circle',
  //     },
  //     {
  //         label: 'Edit',
  //         icon: 'fa-edit'
  //     }
  // ];
  }

  
  private saveToFileSystem(data: any) {
  
    var downloadUrl= URL.createObjectURL(data);
    window.open(downloadUrl, "_blank");
                 
  }

  blankMenuBar(){
    this.items = [];
  }

  clearMenuBar(){
    this.items = [];
  }


  
  



}
