import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/en/welcome',
    pathMatch: 'full',
  },
  {
    path: 'en',
    loadChildren: () =>
      import('./english/english.module').then((m) => m.EnglishModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
