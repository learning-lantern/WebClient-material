import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [HttpService],
  imports: [HttpClientModule],
})
export class ServiceModule {}
