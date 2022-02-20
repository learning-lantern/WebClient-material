import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-class-header',
  templateUrl: './class-header.component.html',
  styleUrls: ['./class-header.component.scss'],
})
export class ClassHeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  sideToggle() {
    this.sidenavToggle.emit();
  }
}
