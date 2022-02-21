import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class showDetailService {
  showDetail = new Subject<{ name: string; isFavorite: boolean }>();

  getShowDetail() {
    return this.showDetail.asObservable();
  }
}
