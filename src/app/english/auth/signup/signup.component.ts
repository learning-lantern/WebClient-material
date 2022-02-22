import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/serivces/http.service';
import { matchPassword } from 'src/app/Validators/confirm-password.validator';
import { validateName } from 'src/app/Validators/validate-name.validators';
import { environment as env } from 'src/environments/environment';
import { NotificationService } from 'src/app/serivces/notifications.service';
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
  userFName!: FormControl;
  userMName!: FormControl;
  userLName!: FormControl;
  userEmail!: FormControl;
  userPassword!: FormControl;
  confirmPassword!: FormControl;
  iAgree!: FormControl;
  constructor(
    private router: Router,
    private http: HttpService,
    private notify: NotificationService
  ) {
    this.initFormControls();
    this.createForm();
  }
  initFormControls() {
    this.userUniversity = new FormControl('1', [Validators.required]);
    this.userFName = new FormControl('hema', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.userMName = new FormControl('mohamed', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.userLName = new FormControl('ali', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.userEmail = new FormControl('hema@gmail.com', [
      Validators.required,
      Validators.email,
    ]);
    this.userPassword = new FormControl('123456Hr@', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{6,}$'
      ),
    ]);
    this.confirmPassword = new FormControl('123456Hr@', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{6,}$'
      ),
    ]);
    this.iAgree = new FormControl(true, [Validators.requiredTrue]);
  }

  createForm() {
    this.signupForm = new FormGroup(
      {
        userUniversity: this.userUniversity,
        userFName: this.userFName,
        userMName: this.userMName,
        userLName: this.userLName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        confirmPassword: this.confirmPassword,
        iAgree: this.iAgree,
      },
      matchPassword
    );
  }

  onSubmit() {
    let body = {
      Email: this.userEmail.value,
      Password: this.userPassword.value,
      FirstName: this.userFName.value,
      LastName: this.userLName.value,
    };

    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).forEach((key) => {
        this.signupForm.controls[key].markAsDirty();
        this.signupForm.controls[key].markAsTouched();
      });
    } else {
      this.http.doPost(`${env.authURL}/Auth/Create`, body, {}).subscribe(
        async (res) => {
          this.notify.openSnackBar('Created Successfully', 'ok', '', '', 3000);
          this.router.navigate([
            `/en/auth/email-validation/${this.userEmail.value}`,
          ]);
        },
        (error) => {
          console.log(error);
          if (error.status === 409) {
            this.notify.openSnackBar(
              'email already registered',
              'ok',
              '',
              '',
              3000
            );
            this.userEmail.setErrors({
              isExist:
                'This email is already registered before, please use another email or login instead',
            });
          } else if (error.status === 500 || error.status === 404) {
            this.notify.openSnackBar(
              'Internal server Error, please try again later',
              'ok',
              '',
              '',
              3000
            );
          } else {
            this.notify.openSnackBar(
              'server is down, please try again later',
              'ok',
              '',
              '',
              3000
            );
          }
        }
      );
    }
  }
}
