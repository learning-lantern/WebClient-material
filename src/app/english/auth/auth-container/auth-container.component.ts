import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent implements OnInit {
  constructor(private router: Router) {
    if (localStorage.getItem('token')?.length) {
      console.log(`token found`);
      this.router.navigate(['/en/welcome']);
    }
  }

  ngOnInit(): void {}
}
