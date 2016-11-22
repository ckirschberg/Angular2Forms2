import {Component, OnInit} from '@angular/core';
import {InternshipsService} from "./internships.service";
import { Router } from '@angular/router';
import { FilterInternships } from './filter-internships.pipe';

@Component({
    selector: 'internships',
    template: `

    {{ birthDate | date:'MM/dd/yyyy' }}

    {{ birthDate | date | lowercase }}

    {{ 0.75 | percent }}
    {{ 132 | currency:'DKK' }}

    <input type="text" class="form-control" [(ngModel)]="search"  />

    <div *ngFor="let internship of internships | filterInternships: search " (click)="gotoInternship(internship)">
        {{internship.initials}}
    </div>

    <button routerLink="a">Goto A component</button>
    <button routerLink="b">Goto B component</button>

    <button routerLink="/internship">Create new internship</button>

    <router-outlet></router-outlet>
    `
})

export class InternshipsComponent implements OnInit {
    private internships: any[] = [];
    private errorMessage: string = "";
    private birthDate: Date;
    ngOnInit():void {
        this.internshipsService.getAllInternships().subscribe(
          internships => this.internships = internships,
          error => this.errorMessage = error
        );
      this.birthDate = new Date(1979, 1, 1);
    }
    constructor(private internshipsService: InternshipsService,
                private router: Router) {


    }


  gotoInternship(internship: any): void {


      let link = ['/internship', internship._id];
      this.router.navigate(link);

  }
}
