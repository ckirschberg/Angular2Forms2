import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InternshipEntryComponent} from "./internshipEntry.component";

@NgModule({
  declarations: [
    AppComponent,
    InternshipEntryComponent //I added this.
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule //I added this.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
