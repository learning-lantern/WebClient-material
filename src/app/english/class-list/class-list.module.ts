import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassListRoutingModule } from './class-list-routing.module';
import { ClassListComponent } from './class-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ClassSideNavComponent } from './class-side-nav/side-nav.component';
import { ClassHeaderComponent } from './class-header/class-header.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { TodoComponent } from './todo/todo.component';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    ClassListComponent,
    ClassSideNavComponent,
    ClassHeaderComponent,
    MyCoursesComponent,
    TodoComponent,
    CalenderComponent,
  ],
  imports: [CommonModule, ClassListRoutingModule, MaterialModule],
})
export class ClassListModule {}
