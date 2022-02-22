import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './notifications.service';

@NgModule({
  providers: [HttpService, NotificationService],
  imports: [HttpClientModule],
})
export class ServiceModule {}
