import { Component, ElementRef, OnInit,ViewChild} from '@angular/core';
import * as $ from 'jquery';
import tinymce from 'tinymce';



@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  // @ViewChild('tinymce', { static:false }) tinymce :any;
  @ViewChild('preview') preview!:ElementRef;
  htmlValue: any ;
  init={
    selector: '#editor',
    height: 300,
    width: "100%",
    menubar: 'favs file edit view insert format tools table help', plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'], toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
      'forecolor backcolor emoticons | help',
  menu: {
    favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  };
  isEditor =  false;
  constructor() { }
  get_editor_content() {
    // Alerts the currently selected contents
   console.log('get_editor_content',this.htmlValue)

  }
  ngOnInit(): void {
  }

  toggleView(){
    if (!this.isEditor) {
      tinymce.get("editor").setContent('hello');
    }else{
      this.preview.nativeElement = tinymce.get("editor").getContent();
    }

    // $('#editor-wrap,#preview').toggle();


  }

}
