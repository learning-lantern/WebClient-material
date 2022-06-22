import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lesson-side-nav',
  templateUrl: './lesson-side-nav.component.html',
  styleUrls: ['./lesson-side-nav.component.scss']
})
export class LessonSideNavComponent implements OnInit {
  @Output() toggleSide = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.toggleSide.emit();
  }

}
