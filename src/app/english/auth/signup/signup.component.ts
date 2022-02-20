import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/serivces/http.service';
import { matchPassword } from 'src/app/Validators/confirm-password.validator';
import { validateName } from 'src/app/Validators/validate-name.validators';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  hide = true;
  universityList = [
    { id: 1, name: 'Assuit University' },
    { id: 2, name: 'EELU University' },
  ];
  signupForm!: FormGroup;
  userUniversity!: FormControl;
  FirstName!: FormControl;
  MiddleName!: FormControl;
  LastName!: FormControl;
  Email!: FormControl;
  Password!: FormControl;
  ConfirmPassword!: FormControl;
  iAgree!: FormControl;
  constructor(private router: Router, private http: HttpService) {
    this.initFormControls();
    this.createForm();
  }
  initFormControls() {
    this.userUniversity = new FormControl('', [Validators.required]);
    this.FirstName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.MiddleName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.LastName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.Email = new FormControl('', [Validators.required, Validators.email]);
    this.Password = new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{6,}$'
      ),
    ]);
    this.ConfirmPassword = new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{6,}$'
      ),
    ]);
    this.iAgree = new FormControl(null, [Validators.requiredTrue]);
  }

  createForm() {
    this.signupForm = new FormGroup(
      {
        userUniversity: this.userUniversity,
        FirstName: this.FirstName,
        MiddleName: this.MiddleName,
        LastName: this.LastName,
        Email: this.Email,
        Password: this.Password,
        ConfirmPassword: this.ConfirmPassword,
        iAgree: this.iAgree,
      },
      matchPassword
    );
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).forEach((key) => {
        console.log(key);
        this.signupForm.controls[key].markAsDirty();
        this.signupForm.controls[key].markAsTouched();
      });
    } else {
      let body = this.signupForm.value;
      delete body.userMName;
      delete body.userUniversity;
      delete body.confirmPassword;
      delete body.iAgree;

      this.http
        .doPost(`${env.authURL}/auth/create`, this.signupForm.value, {})
        .subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
            // if (error.status === 401) return;
          }
        );
    }
  }
}
