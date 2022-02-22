import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from 'src/app/serivces/http.service';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-validation-redirect',
  templateUrl: './validation-redirect.component.html',
  styleUrls: ['./validation-redirect.component.scss'],
})
export class ValidationRedirectComponent implements OnInit {
  params: any;
  constructor(private router: ActivatedRoute, private http: HttpService) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      this.params = params;
      let token = encodeURIComponent(this.params.token);
      console.log(token);
      this.http
        .doGet(
          `${env.authURL}/Auth/ConfirmEmail?userId=${this.params.userId}&token=${token}`,
          {
            params: {
              userId: this.params.userId,
              token: encodeURIComponent(this.params.token),
            },
          }
        )
        .subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {}
        );
    });
  }
}
