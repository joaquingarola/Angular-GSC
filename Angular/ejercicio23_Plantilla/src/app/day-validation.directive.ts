import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appDayValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: DayValidationDirective, multi: true}]
})
export class DayValidationDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
		return dayValidator()(control);
	}

}

export function dayValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
    const day = new Date(control.value).getDay();
    return (day == 5|| day == 6) ? {'invalid': true, message: ' * El día no puede ser sábado ni domingo' } : null;
  }
};

