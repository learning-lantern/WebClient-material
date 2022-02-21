import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { ClassListComponent } from './class-list.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { TodoMydayComponent } from './todo/todo-myday/todo-myday.component';
import { TodoComponent } from './todo/todo.component';

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
        children: [{ path: 'myday', component: TodoMydayComponent }],
      },
      {
        path: 'calendar',
        component: CalenderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassListRoutingModule {}
