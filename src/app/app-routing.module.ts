import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InternshipEntryComponent} from "./internshipEntry.component";
import {InternshipsComponent} from "./internships.component";
import {AboutComponent} from "./about.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/internships',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'internships',
    component: InternshipsComponent
  },
  {
    path: 'internship',
    component: InternshipEntryComponent
  },
  {
    path: 'internship/:id',
    component: InternshipEntryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class InternshipsRoutingModule { }


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
