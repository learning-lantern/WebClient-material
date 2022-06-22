import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import  dayGridPlugin from '@fullcalendar/daygrid';
import { ClassListRoutingModule } from './class-list-routing.module';
import { ClassListComponent } from './class-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ClassSideNavComponent } from './class-side-nav/side-nav.component';
import { ClassHeaderComponent } from './class-header/class-header.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { TodoComponent } from './todo/todo.component';
import { CalenderComponent } from './calender/calender.component';
import { TodoSidenavComponent } from './todo/todo-sidenav/todo-sidenav.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoMydayComponent } from './todo/todo-myday/todo-myday.component';
import { showDetailService } from './todo/show-detail.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoTasksComponent } from './todo/todo-tasks/todo-tasks.component';
import { TodoImportantComponent } from './todo/todo-important/todo-important.component';
import { TodoCompletedComponent } from './todo/todo-completed/todo-completed.component';
import { HttpClientModule } from '@angular/common/http';
import { VideosComponent } from './videos/videos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TinymceComponent } from './tinymce/tinymce.component';
import { LessonSideNavComponent } from './tinymce/lesson-side-nav/lesson-side-nav.component';
import { LessonDetailComponent } from './tinymce/lesson-detail/lesson-detail.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
  declarations: [
    ClassListComponent,
    ClassSideNavComponent,
    ClassHeaderComponent,
    MyCoursesComponent,
    TodoComponent,
    CalenderComponent,
    TodoSidenavComponent,
    TodoDetailComponent,
    TodoMydayComponent,
    TodoTasksComponent,
    TodoImportantComponent,
    TodoCompletedComponent,
    VideosComponent,
    WelcomeComponent,
    TinymceComponent,
    LessonSideNavComponent,
    LessonDetailComponent,
  ],
  imports: [
    CommonModule,
    ClassListRoutingModule,
    MaterialModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
  ],
  providers: [showDetailService],
})
export class ClassListModule {}
