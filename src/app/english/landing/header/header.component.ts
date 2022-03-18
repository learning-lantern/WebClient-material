import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output('toggleSidenav') toggleSidenav = new EventEmitter();
  isActive = 'home';
  hasToken = localStorage.getItem('token')?.length;
  userName = localStorage.getItem('fName')?.replace(/"/g, '');
  drop = false;
  isHidden = true;
  showLogin = true;
  constructor(private router: Router) {}
  scrollTO(str: string) {
    document
      .getElementById(str)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  changeActive(str: string) {
    this.isActive = str;
  }

  logMeOut() {
    localStorage.removeItem('token');
    this.router
      .navigateByUrl('/refresh', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/en/welcome']);
      });
  }
  toggle() {
    this.toggleSidenav.emit();
  }
}
