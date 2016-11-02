import {Injectable} from "@angular/core";
import { internships } from "./mock-internships";
import { Http, Response } from '@angular/http';

@Injectable()
export class InternshipsService {

  constructor(private http: Http)
  {}

  public getInternships(): any {

    return internships;
  }

  public getInternship(id: number): any {
    return this.getInternships().find(internship => internship._id === id);
  }
}
