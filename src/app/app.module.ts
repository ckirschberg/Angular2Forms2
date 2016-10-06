import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InternshipEntryComponent} from "./internshipEntry.component";
import {routing} from "./app-routing.module";
import {AboutComponent} from "./about.component";
import {InternshipsComponent} from "./internships.component";

@NgModule({
  declarations: [
    AppComponent,
    InternshipEntryComponent, //I added this.
    AboutComponent,
    InternshipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, //I added this.
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
