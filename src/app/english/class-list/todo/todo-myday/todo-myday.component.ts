import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { showDetailService } from '../show-detail.service';
import { TodoTask } from 'src/app/interface/todo-tasks.interface';
import { HttpService } from 'src/app/serivces/http.service';
import { environment as env } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-myday',
  templateUrl: './todo-myday.component.html',
  styleUrls: ['./todo-myday.component.scss'],
})
export class TodoMydayComponent implements OnInit, OnDestroy {
  params: any;
  taskListClient: TodoTask[] = [];
  addTaskForm: FormGroup = new FormGroup({});
  task!: FormControl;

  @Output() showDetail = new EventEmitter<void>();
  constructor(
    private detail: showDetailService,
    private fb: FormBuilder,
    private https: HttpService,
    private router: ActivatedRoute
  ) {
    this.CreatNewTask();
  }
  CreatNewTask() {
    this.addTaskForm = this.fb.group({
      Name: '',
      date: this.fb.group({
        dueDate: '',
        repeat: '0',
      }),
    });
  }
  // getTasks(): FormArray {
  //   return <FormArray>this.addTaskForm.get('addNewTask');
  // }

  addTask() {
    let newTask: TodoTask = this.addTaskForm.value;
    newTask['key'] = this.generateKey();
    this.taskListClient.push(newTask);
    this.syncTaskToLoacalStorage();
    let body_ = {
      Name: newTask.Name,
      key: this.generateKey(),
    };
    this.https.doPost(``, body_, {}).subscribe((res) => {
      let result = res as {
        UserId: {
          Id: number;
          Name: string;
          DueDate: string;
          Note: string;
          Completed: boolean;
          Important: boolean;
          MyDay: true;
          Repeated: string;
          key: string;
        };
        token: string;
      };
    });
  }

  private addTaskRequest(task: TodoTask) {
    this.https.doPost(``, task, {}).subscribe((res) => {
      let result = res as TodoTask;
      this.syncTaskList(result.key, result);
    });
  }

  private generateKey(): string {
    let allowedCharacter = '_=abcdefghijklmnopqrstuv1234567890@#$';
    let key = '';
    for (let i = 0; i < 15; i++) {
      key += allowedCharacter[Math.floor(Math.random() * 37)];
    }
    return key;
  }

  private syncTaskList(key: string, serverTask: TodoTask): void {
    let clientTask = this.taskListClient.findIndex((task) => task.key === key);
    this.taskListClient[clientTask] = serverTask;
    this.syncTaskToLoacalStorage();
  }
  // removeTask(item: number) {
  //   this.taskList.splice(item, 1);
  // }

  private syncTaskToLoacalStorage() {
    localStorage.setItem('cachedTasks', JSON.stringify(this.taskListClient));
  }
  ngOnInit(): void {
    console.log('working');
    let cache = localStorage.getItem('cachedTasks');
    if (cache?.length) {
      this.taskListClient = JSON.parse(cache);
    } else
      localStorage.setItem('cachedTasks', JSON.stringify(this.taskListClient));
    // GET all tasks from the server
    this.syncFromServer();
  }

  openDetail(task: TodoTask) {
    this.detail.showDetail.next(task);
  }
  private syncFromServer() {
    //get request

    this.router.queryParams.subscribe((params) => {
      this.params = {important:'false'};
      this.https.doGet(`${env.authURL}/getTasks?Id=${this.params.Id}&token=${encodeURIComponent(this.params.token)}`, {params}
      )
      console.log('params',params);
    });
    let res: TodoTask[] = [
      {
        Id: 10,
        Name: 'hello',
        DueDate: '',
        Note: '',
        Important: false,
        Myday: false,
        Completed: false,
        Repeated: '',
        key: '',
      },
    ];
    let cachedTasks = JSON.parse(localStorage.getItem('cachedTasks') || '');
    if (!cachedTasks.length) {
      localStorage.setItem('cachedTasks', JSON.stringify(res));
      this.taskListClient = res;
    } else {
      for (let i = 0; i < res.length; i++) {
        let index = cachedTasks.findIndex((task: TodoTask) => {
          task.Id == res[i].Id;
        });
        if (index) {
          cachedTasks[index] = res[i];
          this.taskListClient = cachedTasks;
          this.syncTaskToLoacalStorage();
        }
      }
    }
    let notSendTasks = cachedTasks.filter((task: TodoTask) => {
      return task.Id === undefined;
    });

    for (let task of notSendTasks) {
      this.addTaskRequest(task);
    }
  }

  ngOnDestroy(): void { }
}