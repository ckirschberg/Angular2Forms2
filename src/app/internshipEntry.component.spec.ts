import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { InternshipEntryComponent } from './internshipEntry.component';


let comp:    InternshipEntryComponent;
let fixture: ComponentFixture<InternshipEntryComponent>;
let de:      DebugElement;
let el:      HTMLElement;
let input:   HTMLInputElement;

import {FormsModule, ReactiveFormsModule, FormGroup} from "@angular/forms";

describe('InternshipEntryComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipEntryComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ], // declare the test component
    });

    fixture = TestBed.createComponent(InternshipEntryComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    input = fixture.debugElement.query(By.css("input")).nativeElement;
    el = fixture.debugElement.nativeElement; //the component. (Beware of *ngIf invisible elements)
  });


  // it('should display error message - initials', () => {
  //   input.value = '';
  //   fixture.detectChanges();
  //
  //   let msgs = el.querySelectorAll('p.help-block');
  //
  //   expect(msgs[0].innerHTML).toContain('Initials are invalid');
  // });



  it('should create a `FormGroup` comprised of `FormControl`s', () => {
    comp.ngOnInit();
    expect(comp.internshipForm instanceof FormGroup).toBe(true);
  });

  it('form should start out invalid', () => {
    comp.ngOnInit();
    fixture.detectChanges();

    expect(comp.internshipForm.valid).toBeFalsy();
  });

  it('should have invalid error message if initials is empty', () => {
    comp.ngOnInit();
    comp.initialsVisible = true;
    fixture.detectChanges(); //setting this here, updates the component under test.

    let msgs = el.querySelectorAll('p.help-block');

    expect(msgs[0].innerHTML).toContain('Initials are invalid');
  });

  it('should have no error message if initials are filled out', () => {
    input.value = '123chrk';
    comp.ngOnInit();
    fixture.detectChanges(); //setting this here, updates the component under test.

    let msgs = el.querySelectorAll('p.help-block');

    expect(msgs[0]).toBeUndefined();
  });
});
