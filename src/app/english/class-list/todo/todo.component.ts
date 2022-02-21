import { Component, OnInit, ViewChild } from '@angular/core';
import { showDetailService } from './show-detail.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  detailOpend = false;
  taskDetail: { name: string; isFavorite: boolean } = {
    name: 'dummy',
    isFavorite: true,
  };
  constructor(private detail: showDetailService) {}
  @ViewChild('right') details: any;
  ngOnInit(): void {
    this.detail.getShowDetail().subscribe((data) => {
      this.showDetails();
      this.taskDetail = data;
    });
  }

  showDetails() {
    this.detailOpend = true;
  }
}
