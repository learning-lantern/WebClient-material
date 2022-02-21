import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { showDetailService } from './show-detail.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  detailOpend = false;
  taskDetail: { name: string; isFavorite: boolean } = {
    name: 'dummy',
    isFavorite: true,
  };
  constructor(private detail: showDetailService, private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/en/class/todo') {
      this.router.navigate([this.router.url, 'myday']);
    }
    this.detail.getShowDetail().subscribe((data) => {
      this.showDetails();
      this.taskDetail = data;
    });
  }

  showDetails() {
    this.detailOpend = true;
  }
}
