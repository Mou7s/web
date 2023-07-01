import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, OnInit {
  @Input() item!: string;
  constructor() {
    console.log('ArticleBodyComponent: constructor');
  }

  ngOnInit() {
    console.log('ArticleBodyComponent: ngOnInit');
  }

  ngOnChanges() {
    console.log('ArticleBodyComponent: ngOnChanges');
  }
}
