import { NgModule } from '@angular/core';
import { BidiModule } from '@angular/cdk/bidi';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materials = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [materials, BidiModule],
  exports: [materials],
})
export class MaterialModule {}
