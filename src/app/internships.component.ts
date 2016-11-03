import {Component, OnInit} from '@angular/core';
import {InternshipsService} from "./internships.service";
import { Router } from '@angular/router';

@Component({
    selector: 'internships',
    template: `

    <div *ngFor="let internship of internships" (click)="gotoInternship(internship)">
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

    ngOnInit():void {
        this.internships = this.internshipsService.getAllInternships();
    }
    constructor(private internshipsService: InternshipsService,
                private router: Router) {

    }

    gotoInternship(internship: any): void {
        let link = ['/internship', internship._id];
        this.router.navigate(link);
    }

}
