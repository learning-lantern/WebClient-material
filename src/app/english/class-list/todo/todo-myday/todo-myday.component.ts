import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { showDetailService } from '../show-detail.service';

@Component({
  selector: 'app-todo-myday',
  templateUrl: './todo-myday.component.html',
  styleUrls: ['./todo-myday.component.scss'],
})
export class TodoMydayComponent implements OnInit {
  @Output() showDetail = new EventEmitter<void>();
  taksList = [
    { name: 'task1', isFavorite: true },
    { name: 'task2', isFavorite: false },
  ];
  constructor(private detail: showDetailService) {}

  ngOnInit(): void {}

  openDetail(task: { name: string; isFavorite: boolean }) {
    this.detail.showDetail.next(task);
  }
}
