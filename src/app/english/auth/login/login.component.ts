import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/serivces/http.service';
import { NotificationService } from 'src/app/serivces/notifications.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  universityList = [
    { id: 1, name: 'Assuit University' },
    { id: 2, name: 'EELU University' },
  ];
  loginForm!: FormGroup;
  userUniversity!: FormControl;
  userEmail!: FormControl;
  userPassword!: FormControl;
  constructor(
    private http: HttpService,
    private router: Router,
    private notify: NotificationService
  ) {
    this.initFormControls();
    this.createForm();
  }

  initFormControls() {
    this.userUniversity = new FormControl('', [Validators.required]);
    this.userEmail = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.userPassword = new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{6,}$'
      ),
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      userUniversity: this.userUniversity,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        console.log(key);
        this.loginForm.controls[key].markAsDirty();
        this.loginForm.controls[key].markAsTouched();
      });
    } else {
      let body_ = {
        Email: this.userEmail.value,
        Password: this.userPassword.value,
      };
      this.http.doPost(`${env.authURL}/Auth/signin`, body_, {}).subscribe(
        (res) => {
          console.log('hey!!!!!!');
          let result = res as {
            id: number;
            token: string;
            lastName: string;
            firstName: string;
          };
          localStorage.setItem('userId', JSON.stringify(result.id));
          localStorage.setItem('token', JSON.stringify(result.token));
          localStorage.setItem('fName', JSON.stringify(result.firstName));
          localStorage.setItem('lName', JSON.stringify(result.lastName));
          this.notify.openSnackBar('Successfull', 'ok', '', '', 3000);
          this.router.navigate(['/en/class']);
        },
        (error) => {
          console.log(error);
          this.notify.openSnackBar('Error', 'ok', '', '', 3000);
        }
      );
    }
  }
}
