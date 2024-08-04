// import { Injectable } from '@angular/core';
// import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class PhoneService {
//   private phonesSubject = new BehaviorSubject<FormArray>(this.fb.array([]));
//   phones$ = this.phonesSubject.asObservable();

//   constructor(private fb: FormBuilder) {}

//   getPhonesArray(): FormArray {
//     return this.phonesSubject.value;
//   }

//   addPhone() {
//     const phoneFormGroup = this.fb.group({
//       phone: ['', Validators.required],
//     });
//     const phones = this.getPhonesArray();
//     phones.push(phoneFormGroup);
//     this.phonesSubject.next(phones);
//   }

//   removePhone(index: number) {
//     const phones = this.getPhonesArray();
//     phones.removeAt(index);
//     this.phonesSubject.next(phones);
//   }

//   getPhoneFormGroup(index: number): FormGroup {
//     return this.getPhonesArray().at(index) as FormGroup;
//   }

//   checkPhoneControlsValidity() {
//     const phones = this.getPhonesArray();
//     for (let i = phones.length - 1; i >= 0; i--) {
//       const phoneGroup = phones.at(i);
//       if (phoneGroup.get('phone')?.invalid) {
//         phones.removeAt(i);
//       }
//     }
//     this.phonesSubject.next(phones);
//   }
// }
