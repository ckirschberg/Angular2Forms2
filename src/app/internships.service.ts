import { Injectable } from '@angular/core';
import { internships } from './mock-internships';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//I want to be able to inject this service into other components.
@Injectable()
export class InternshipsService {

    constructor(private http: Http) {

    }

    //I want a method that returns the internships
    public getAllInternships(): Observable<any[]> {
        return this.http.get("http://angular2api1.azurewebsites.net/api/internships/getall")
          .map(this.extractData)
          .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      console.log(body);
      return body || {};
    }

    private handleError(error: Response | any) {
      console.log(error);
      return Observable.throw("some error message");
    }

    public getInternship(id: number): any {

        //return this.getAllInternships().find(internship => internship._id === id);
      return {};
    }
}
