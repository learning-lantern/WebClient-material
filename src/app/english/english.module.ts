import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './english.component';
import { AuthContainerComponent } from './auth/auth-container/auth-container.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MaterialModule } from '../material/material.module';
import { ServiceModule } from '../serivces/services.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './landing/main/main.component';
import { EmailValidationComponent } from './auth/email-validation/email-validation.component';
import { ValidationRedirectComponent } from './auth/validation-redirect/validation-redirect.component';

@NgModule({
  declarations: [
    EnglishComponent,
    AuthContainerComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    EmailValidationComponent,
    ValidationRedirectComponent,
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule,
    MaterialModule,
    ServiceModule,
    ReactiveFormsModule,
  ],
})
export class EnglishModule {}
