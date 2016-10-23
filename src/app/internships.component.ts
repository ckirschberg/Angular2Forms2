import {Component, OnInit} from "@angular/core";
import {InternshipsService} from "./internships.service";
import {Router} from "@angular/router";

@Component({
  selector: 'internships',

  template: `
<h2>This is the internships component</h2>
<div *ngFor="let internship of internships" (click)="gotoInternship(internship)">
  {{internship.initials}}
</div>


<button routerLink="a">A</button>
<button routerLink="b">B</button>
<router-outlet></router-outlet>
`
})
export class InternshipsComponent implements OnInit {
  private internships: any[] = [];

  constructor(private internshipsService: InternshipsService,
              private router: Router) {

  }

  ngOnInit():void {
    this.internships = this.internshipsService.getInternships();
  }

  gotoInternship(internship: any) {
    let link = ['/internship', internship._id];
    this.router.navigate(link);
  }
}
