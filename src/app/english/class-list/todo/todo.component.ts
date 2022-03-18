import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { showDetailService } from './show-detail.service';
import { HttpClient } from '@angular/common/http';
import { TodoTask } from 'src/app/interface/todo-tasks';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  detailOpend = false;
  taskDetail: TodoTask = {
    Id: 10,
    Name: 'hello',
    DueDate: '',
    Note: '',
    Important: false,
    Myday: false,
    Completed: false,
    Repeated: '',
    key: '',
  };

  constructor(
    private detail: showDetailService,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    if (this.router.url === '/en/class/todo') {
      console.log(this.router.url);
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
