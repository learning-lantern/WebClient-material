import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss'],
})
export class EnglishComponent implements OnInit {
  isActive = 'home';
  hasToken = localStorage.getItem('token')?.length;
  userName = localStorage.getItem('fName')?.replace(/"/g, '');
  drop = false;
  isHidden = true;
  showLogin = true;
  constructor(private router: Router) {
    if (this.router.url === '/en') this.router.navigate(['/en/welcome']);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) this.showLogin = false;
  }
  changeActive(str: string) {
    this.isActive = str;
  }

  showSidebar() {
    this.isHidden = !this.isHidden;
  }

  dropToggle() {
    this.drop = !this.drop;
  }

  switchLang(oldLang: string, newLang: string) {
    const url = this.router.url;
    const url2 = url.replace(`/${oldLang}`, `/${newLang}`);
    this.router.navigate([url2]);
  }
  scrollTO(str: string) {
    document
      .getElementById(str)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  logMeOut() {
    localStorage.removeItem('token');
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/en/welcome']);
      });
  }
}
