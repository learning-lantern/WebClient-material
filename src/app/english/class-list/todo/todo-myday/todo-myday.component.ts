import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { showDetailService } from '../show-detail.service';
import { TodoTask } from 'src/app/interface/todo-tasks';

@Component({
  selector: 'app-todo-myday',
  templateUrl: './todo-myday.component.html',
  styleUrls: ['./todo-myday.component.scss'],
})
export class TodoMydayComponent implements OnInit {
   taskList: TodoTask[] = [];
   addTaskForm: FormGroup;

  @Output() showDetail = new EventEmitter<void>();
  constructor(private detail: showDetailService ,private fb: FormBuilder) {
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
  }

  removeTask(item: number) {
    this.taskList.splice(item, 1);
  }   

  ngOnInit(): void {}

  openDetail(task: { name: string; isFavorite: boolean }) {
    this.detail.showDetail.next(task);
  }
}
