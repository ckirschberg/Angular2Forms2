import {Injectable} from "@angular/core";
import { internships } from "./mock-internships";

@Injectable()
export class InternshipsService {

  public getInternships(): any {
    return internships;
  }

  public getInternship(id: number): any {
    return this.getInternships().find(internship => internship._id === id);
  }
}
