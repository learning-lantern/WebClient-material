import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class ClassSideNavComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  sideToggle() {
    this.sidenavToggle.emit();
  }
}
