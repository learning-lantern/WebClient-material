import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  constructor(private router: Router) {
    if (this.router.url.split('/').length == 3)
      this.router.navigate(['/en/class/mycourses']);
  }

  ngOnInit(): void {}
}
