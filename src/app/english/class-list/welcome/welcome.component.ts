import { Component } from '@angular/core';
import { QuizArray } from '../videos/videos.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  quizeArray: QuizArray[]=[
    {
      quizId:'2',
      time:8,
    },
    {
      quizId:'5',
      time:13,
    },
  
  ];

}
