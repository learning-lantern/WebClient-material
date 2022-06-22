import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
    if (this.router.url === '/en/class/lesson') {
      console.log(this.router.url);
      this.router.navigate([this.router.url, 'detail']);
    }
  }

}
