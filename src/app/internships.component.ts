import {Component, OnInit} from '@angular/core';
import {InternshipsService} from "./internships.service";

@Component({
    selector: 'internships',
    template: `

    <div *ngFor="let internship of internships">
        {{internship.initials}}
    </div>

    <button routerLink="/internship">Create new internship</button>
    `
})

export class InternshipsComponent implements OnInit {
    private internships: any[] = [];

    ngOnInit():void {
        this.internships = this.internshipsService.getAllInternships();
    }
    constructor(private internshipsService: InternshipsService) {

    }
}
