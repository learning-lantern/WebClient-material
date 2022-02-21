import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-sidenav',
  templateUrl: './todo-sidenav.component.html',
  styleUrls: ['./todo-sidenav.component.scss'],
})
export class TodoSidenavComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.toggleSidenav.emit();
  }
}
