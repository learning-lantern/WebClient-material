import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RefreshComponent } from './refresh/refresh.component';

const routes: Routes = [
  {
    path: 'en',
    loadChildren: () =>
      import('./english/english.module').then((m) => m.EnglishModule),
  },
  {
    path: '',
    redirectTo: '/en/welcome',
    pathMatch: 'full',
  },
  {
    path: 'refresh',
    component: RefreshComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
