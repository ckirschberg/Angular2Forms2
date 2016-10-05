import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InternshipEntryComponent} from "./internshipEntry.component";
import {routing} from "./app-routing.module";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {InternshipsComponent} from "./internships.component";
import {InternshipsService} from "./internships.service";

@NgModule({
  declarations: [
    AppComponent,
    InternshipEntryComponent,
    HomeComponent,
    AboutComponent,
    InternshipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [InternshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
