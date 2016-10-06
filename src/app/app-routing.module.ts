import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";
import {InternshipsComponent} from "./internships.component";
import {InternshipEntryComponent} from "./internshipEntry.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'internships',
    component: InternshipsComponent
  },
  { //new internships
    path: 'internship',
    component: InternshipEntryComponent
  },
  { //edit internship
    path: 'internship/:id',
    component: InternshipEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class InternshipsRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);