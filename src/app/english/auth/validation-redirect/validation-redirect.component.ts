import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/serivces/http.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-validation-redirect',
  templateUrl: './validation-redirect.component.html',
  styleUrls: ['./validation-redirect.component.scss'],
})
export class ValidationRedirectComponent implements OnInit, AfterViewInit {
  id: string;
  validationCode: string;
  constructor(private router: ActivatedRoute, private http: HttpService) {
    this.id = this.router.snapshot.params['id'];
    this.validationCode = this.router.snapshot.params['validationCode'];
  }

  ngOnInit(): void {
    // https://learning-lantern.herokuapp.com/api/Auth/ConfirmEmail?userId=48eb71ad-2146-4b50-95e5-e31e5724d9f2&token=CfDJ8CO5J%2bhTarRKsPhHugyBE3Exqh0SMbZ1QXqj4NrVBMM7VOtaFl%2bxfD15No23xuOgnOAJUDi23eB51YUM92BgUJlbGom61NS6l3en1u91iEfKRb%2fhS9FjCO1SoJAKePVTmvdjpnfyYCL9YJ0fI3ro%2bMymKN8RT6tQ0UrGSiIbuPrOditVrYpm0z%2fmuvcnt7UoWSUeO%2fjd4LkBAw9x1E17TMjFG3dIdlOgTbMEH9kODEs%2fnXBgFsOjLvqhQhYQPOI41w%3d%3d
  }
  ngAfterViewInit(): void {
    this.http
      .doGet(
        `${env.authURL}/Auth/ConfirmEmail?userId=${this.id}&token=${this.validationCode}`,
        {}
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {}
      );
  }
}
