import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Project Review1',
        date: '2022-02-22',
        start: '2022-02-22T16:00:00',
      },
      {
        title: 'Distributed DB',
        date: '2022-02-25',
        start: '2022-02-25T09:30:00',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
