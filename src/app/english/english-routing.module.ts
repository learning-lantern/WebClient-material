import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthContainerComponent } from './auth/auth-container/auth-container.component';
import { EmailValidationComponent } from './auth/email-validation/email-validation.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ValidationRedirectComponent } from './auth/validation-redirect/validation-redirect.component';
import { EnglishComponent } from './english.component';
import { MainComponent } from './landing/main/main.component';
import { VideosComponent } from './class-list/videos/videos.component';


const routes: Routes = [
  {
    path: '',
    component: EnglishComponent,
    children: [
      {
        path: 'auth',
        component: AuthContainerComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'signup',
            component: SignupComponent,
          },
        ],
      },
      { path: 'welcome', component: MainComponent },

      {
        path: 'auth/email-validation/:email',
        component: EmailValidationComponent,
      },
      {
        path: 'auth/email-validation',
        component: ValidationRedirectComponent,
      },
    ],
  },

  {
    path: 'class',
    loadChildren: () =>
      import('./class-list/class-list.module').then((m) => m.ClassListModule),
  },
  {
    path: 'video',component:VideosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishRoutingModule {}
