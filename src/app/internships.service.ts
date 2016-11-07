import {Injectable} from "@angular/core";
import { internships } from "./mock-internships";
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable'; //new

// Operators
import 'rxjs/add/operator/map'; //new
import 'rxjs/add/operator/catch';

@Injectable()
export class InternshipsService {

  constructor(private http: Http)
  {}

  public getInternships(): Observable<any[]> {

    //new
    return this.http.get("http://angular2api1.azurewebsites.net/api/internships/GetAll")
      .map(this.extractData)
      .catch(this.handleError);
  }

  //new
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }
  private handleError (error: Response | any) {
    return Observable.throw("some error...");
  }


  public getInternship(id: number): any {
    //return this.getInternships().find(internship => internship._id === id);
    return {}; //new
  }
}
