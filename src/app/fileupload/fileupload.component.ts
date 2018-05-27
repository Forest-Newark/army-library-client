import { Component, OnInit } from '@angular/core';
import { FileUploadModule } from 'primeng/primeng';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  myUploader(event) {
    let fileList: FileList = event.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('File', file, file.name);
      formData.append('userName',sessionStorage.getItem('currentUser'));
      let headers = new Headers();
      this.http.post(this.apiUrl+'/submitCSV', formData)
        .subscribe(
        data => console.log('success'),
        error => console.log(error)
        )
    }


  }

}
