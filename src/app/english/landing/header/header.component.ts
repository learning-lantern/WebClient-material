import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TodoTask } from 'src/app/interface/todo-tasks';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   *  this is used to toggle the side nav
   */
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

  /**
   *
   * This function is used to change the style of the active
   * note this function uses {@link TodoTask} interface
   * navigation
   *
   * @param str
   *
   * @returns
   */
  changeActive(str: string): void {
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
