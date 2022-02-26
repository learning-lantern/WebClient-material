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
  universityList = [{ name: 'Assuit University' }];
  signupForm!: FormGroup;
  userUniversity!: FormControl;
  userFName!: FormControl;
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
    this.userUniversity = new FormControl('Assuit University', [
      Validators.required,
    ]);
    this.userFName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.userEmail = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.userPassword = new FormControl('', [
      Validators.required,
      Validators.pattern(
        `^(?=.*[A-Z].*[a-z])(?=.*[0-9])(?=.*[!@#$%^&]).{6,30}$`
      ),
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      Validators.pattern(
        `^(?=.*[A-Z].*[a-z])(?=.*[0-9])(?=.*[!@#$%^&]).{6,30}$`
      ),
    ]);
    this.iAgree = new FormControl(null, [Validators.requiredTrue]);
  }

  createForm() {
    this.signupForm = new FormGroup(
      {
        userUniversity: this.userUniversity,
        userFName: this.userFName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        confirmPassword: this.confirmPassword,
        iAgree: this.iAgree,
      },
      matchPassword
    );
  }

  onSubmit() {
    let FirstName = this.userFName.value
      .substr(0, this.userFName.value.indexOf(' '))
      .trim();
    let LastName = this.userFName.value
      .substr(this.userFName.value.indexOf(' ') + 1)
      .trim();
    if (!FirstName || !LastName)
      this.userFName.setErrors({ lastName: 'please enter a availd name' });
    let body = {
      Email: this.userEmail.value,
      Password: this.userPassword.value,
      FirstName,
      LastName,
      University: this.userUniversity.value,
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
