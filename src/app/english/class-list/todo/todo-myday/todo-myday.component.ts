import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { showDetailService } from '../show-detail.service';
import { TodoTask } from 'src/app/interface/todo-tasks';
import { HttpService } from 'src/app/serivces/http.service';

@Component({
  selector: 'app-todo-myday',
  templateUrl: './todo-myday.component.html',
  styleUrls: ['./todo-myday.component.scss'],
})
export class TodoMydayComponent implements OnInit {
  taskList: TodoTask[] = [];
  addTaskForm: FormGroup;
  task!: FormControl;

  @Output() showDetail = new EventEmitter<void>();
  constructor(private detail: showDetailService, private fb: FormBuilder, private https: HttpService) {
    this.addTaskForm = this.CreatNewTask('task');
  }
  CreatNewTask(tasks: string): FormGroup {
    let newTasks = this.fb.group({});
    newTasks = this.fb.group({
      task: '',
      date: this.fb.group({
        dueDate: '',
        repeat: '0',
      }),
    });
    return newTasks;
  }
  getTasks(): FormArray {
    return <FormArray>this.addTaskForm.get('addNewTask');
  }
  addtask() {
    let newTask = this.addTaskForm.value;
    this.taskList.push(newTask);
    let body_ = {
      Name: this.task.value
    };
    this.https.doPost(``, body_, {}).subscribe(
      (res) => {
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
          };

        }
      }
    )
  }

  removeTask(item: number) {
    this.taskList.splice(item, 1);
  }

  ngOnInit(): void { }

  openDetail(task: { name: string; isFavorite: boolean }) {
    this.detail.showDetail.next(task);
  }
}
