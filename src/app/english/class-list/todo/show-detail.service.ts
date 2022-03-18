import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoTask } from 'src/app/interface/todo-tasks';

@Injectable()
export class showDetailService {
  showDetail = new Subject<TodoTask>();

  getShowDetail() {
    return this.showDetail.asObservable();
  }
}
