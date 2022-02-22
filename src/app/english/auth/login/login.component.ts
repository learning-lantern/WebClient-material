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
      Validators.pattern('^(?=.*[A-Z].*[a-z])(?=.*[0-9]).{8,30}$'),
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
      let body = this.loginForm.value;
      this.http.doPost(`${env.authURL}/login`, {}, {}).subscribe(
        (res) => {
          let result = res as { id: number; token: string };
          localStorage.setItem('userId', JSON.stringify(result.id));
          localStorage.setItem('token', JSON.stringify(result.token));
          this.router.navigate(['/en/class']);
        },
        (error) => {
          // if (error.status === 401) return;
        }
      );
    }
  }
}
