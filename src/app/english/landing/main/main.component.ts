import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  servicesList = [
    {
      imgSrc: '/assets/img/virtual-classroom.png',
      altText: 'virtual-classroom',
      serviceName: 'Virtual Classroom',
      serviceDescription: `
      Connect Students and Instructor together via
      <strong class="imp">Online Interactive</strong> meetings
    `,
    },
    {
      imgSrc: '/assets/img/chat.png',
      altText: 'chat',
      serviceName: 'Instant Chat',
      serviceDescription: `
      Stay Connected with others by sending
      <strong class="imp"> Instant Messages.</strong>
    `,
    },
  ];
  constructor() {}

  sectionChange(e: any) {
    console.log(e);
  }
}
