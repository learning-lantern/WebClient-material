import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { ClassListComponent } from './class-list.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { LessonDetailComponent } from './tinymce/lesson-detail/lesson-detail.component';
import { TinymceComponent } from './tinymce/tinymce.component';
import { TodoCompletedComponent } from './todo/todo-completed/todo-completed.component';
import { TodoImportantComponent } from './todo/todo-important/todo-important.component';
import { TodoMydayComponent } from './todo/todo-myday/todo-myday.component';
import { TodoTasksComponent } from './todo/todo-tasks/todo-tasks.component';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: ClassListComponent,
    children: [
      {
        path: 'mycourses',
        component: MyCoursesComponent,
      },
      {
        path: 'todo',
        component: TodoComponent,
        children: [
          { path: 'myday', component: TodoMydayComponent },
          { path: 'tasks', component: TodoTasksComponent },
          { path: 'important', component: TodoImportantComponent },
          { path: 'completed', component: TodoCompletedComponent },
        ],
      },
      {
        path: 'calendar',
        component: CalenderComponent,
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'tinymce',
        component: TinymceComponent,
      },
      {
        path: 'lesson',
        component:TinymceComponent,
        children: [
          { path: 'detail', component: LessonDetailComponent },  
        ],
      },
    ],
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassListRoutingModule { }
