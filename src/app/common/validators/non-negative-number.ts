import { FormControl } from '@angular/forms';
export const NonNegativeNumberValidator = (formControl: FormControl) => {
  if (typeof formControl.value === 'number') {
    return formControl.value >= 0 ? null : {
        negNumber: {
          valid: false
        }
      };
  }
  return null;
};
