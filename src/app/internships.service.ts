import { Injectable } from '@angular/core';
import { internships } from './mock-internships';


//I want to be able to inject this service into other components.
@Injectable()
export class InternshipsService {

    //I want a method that returns the internships
    public getAllInternships(): any {
        return internships;
    }

    public getInternship(id: number): any {
        return this.getAllInternships().find(internship => internship._id === id);
    }
}