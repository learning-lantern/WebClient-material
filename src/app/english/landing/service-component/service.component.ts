import { Component, Input } from '@angular/core';
import { ServiceItemI } from 'src/app/interface/service-detail.interface';

@Component({
  selector: 'app-service-item',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  @Input('serviceDetail') serviceDetail: ServiceItemI = {
    altText: 'default',
    imgSrc: 'defalut',
    serviceDescription: 'default',
    serviceName: 'default',
  };
}
