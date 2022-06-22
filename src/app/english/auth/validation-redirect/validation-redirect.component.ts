import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/serivces/http.service';
import { NotificationService } from 'src/app/serivces/notifications.service';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-validation-redirect',
  templateUrl: './validation-redirect.component.html',
  styleUrls: ['./validation-redirect.component.scss'],
})
export class ValidationRedirectComponent implements OnInit {
  params: any;
  constructor(
    private router: ActivatedRoute,
    private http: HttpService,
    private notify: NotificationService,
    private redirect: Router
  ) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      this.params = params;
      this.http.doGet(`${env.authURL}/Auth/ConfirmEmail?userId=${this.params.userId}&token=${encodeURIComponent(this.params.token)}`,
          {}
        )
        .subscribe(
          (res) => {
            this.notify.openSnackBar('Email Validated!', 'ok', '', '', 3000);
            this.redirect.navigate(['/en/welcome']);
          },
          (error) => {
            this.notify.openSnackBar(
              'erorr! please try again later',
              'ok',
              '',
              '',
              3000
            );
          }
        );
    });
  }
}
