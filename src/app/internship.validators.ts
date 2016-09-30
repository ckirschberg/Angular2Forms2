import {FormControl} from "@angular/forms";

export class InternshipValidators {

  static getInitialsValidator() {
    return function initialsValidator(control: FormControl): { [s: string]: boolean } {

      //all initials must start with 123.
      //It is an example of how you can create custom validators, if you replace the code
      //with a meaningful validator
      if (!control.value.match(/^123/)) {
        return {invalidChars: true};
      }


    }
  }
}
