import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;
  
  downloadCSV():Observable<any>{
    return this.http.get(this.apiUrl+'/downloadCSV');
  }

}
