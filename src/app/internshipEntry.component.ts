import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators, FormControl
} from '@angular/forms';
import {InternshipValidators} from "./internship.validators";

@Component({
  selector: 'internship-entry',
  template: `
  
  <h2 class="">Internship Entry</h2>
  <form class="" [formGroup]="internshipForm" (ngSubmit)="onSubmit(internshipForm)">

    <div class="row">
      <div class="col-sm-12 " [ngClass]="{'has-error': !internshipForm.valid && internshipForm.touched }">
    
        <div class="form-group">
          <label for="initials">Initials</label>
          <input type="text"
                 id="initials"
                 placeholder="Initials"
                 [formControl]="internshipForm.controls['initials']"
                 class="form-control">
                 
           <p *ngIf="!internshipForm.controls.initials.valid && internshipForm.controls.initials.touched" class="help-block">
              Initials are invalid
           </p>
           
           <p *ngIf="internshipForm.controls.initials.hasError('required') && internshipForm.controls.initials.touched"
              class="ui message help-block">
              Initials are required
           </p>
           
           <p *ngIf="internshipForm.controls.initials.hasError('invalidChars') && internshipForm.controls.initials.touched"
                class="ui  message help-block" >
              Initials must begin with 123 
           </p>  
        </div>
        
        <p *ngIf="!internshipForm.valid && internshipForm.controls.initials.touched" class="help-block">
          Form is invalid
        </p>
          
        <button type="submit" class="btn btn-primary" [disabled]="!internshipForm.valid">Submit</button>
      </div>
    </div>
  </form>
  `
})
export class InternshipEntryComponent{
  internshipForm: FormGroup;




  constructor(fb: FormBuilder) {
    this.internshipForm = this.fb.group( {
      'initials': ['', Validators.compose([
        Validators.required, InternshipValidators.getInitialsValidator()])]
    })
  }

  public invalidInitials() : Boolean {

    if (!this.internshipForm.controls['initials'].valid && this.internshipForm.controls['initials'].touched) {
      return true;
    }
    return false;
  }

  public onSubmit(form) {
    if (form.valid) {
      console.log("yes, send data to server");
    }
    else {
      console.log("there was an error.")
    }
  }
}
