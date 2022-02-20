import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.scss'],
})
export class EmailValidationComponent implements OnInit {
  yourEmail: string;
  constructor(private router: ActivatedRoute) {
    this.yourEmail = this.router.snapshot.params['email'];
  }

  ngOnInit(): void {}
}
