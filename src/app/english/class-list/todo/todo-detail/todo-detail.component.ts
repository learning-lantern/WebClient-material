import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoTask } from 'src/app/interface/todo-tasks';
import { HttpService } from 'src/app/serivces/http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  @Input('task') taskDetails!: TodoTask;
  favorite = false;
  repeatOption = '';
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private https: HttpService) {}

  ngOnInit(): void {}

  onClose() {
    this.toggleSidenav.emit();
  }
  postTask() {
    let body_ = {};
    this.https.doPost(``, body_, {}).subscribe((res) => {
      let result = res as {
        UserId: {
          Id: number;
          DueDate: string;
          Note: string;
          Completed: boolean;
          Important: boolean;
          MyDay: true;
          Repeated: string;
        };
      };
    });
  }

  setRepeatOption(str: string) {
    this.repeatOption = str;
  }
}
