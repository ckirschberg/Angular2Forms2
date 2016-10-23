import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InternshipEntryComponent} from "./internshipEntry.component";
import {InternshipsComponent} from "./internships.component";
import {AboutComponent} from "./about.component";
import {HomeComponent} from "./home.component";
import {BComponent} from "./b.component";
import {AComponent} from "./a.component";

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
    component: InternshipsComponent,
    children: [
        {
          path: '',
        },
        {
          path: 'a',
          component: AComponent
        },
        {
          path: 'b',
          component: BComponent
        }
      ]
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
