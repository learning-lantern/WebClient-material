import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  coursesList = [
    { title: 'Software Engineering', online: 24, notifications: 5 },
    { title: 'Computer Networks', online: 18, notifications: 2 },
    { title: 'AI', online: 3, notifications: 6 },
    { title: 'Advanced Databases', online: 3, notifications: 0 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
