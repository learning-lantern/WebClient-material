import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-header',
  templateUrl: './class-header.component.html',
  styleUrls: ['./class-header.component.scss'],
})
export class ClassHeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  sideToggle() {
    this.sidenavToggle.emit();
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
