import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  @Input('task') taskDetails!: { name: string; isFavorite: boolean };
  favorite = false;
  repeatOption = '';
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.toggleSidenav.emit();
  }

  setRepeatOption(str: string) {
    this.repeatOption = str;
  }
}
