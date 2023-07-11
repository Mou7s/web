import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input() href: string | undefined; // 添加的输入型属性，对应模板<a>标签的href属性
  @Input() content: string | undefined; // 添加的输入型属性，对应模板<a>标签的value属性

  @Output() clickme: EventEmitter<string> = new EventEmitter<string>();

  showme(content: string | undefined) {
    this.clickme.emit(content);
  }
  ngOnInit() {}
}
