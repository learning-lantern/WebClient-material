import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { ClassListComponent } from './class-list.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
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
