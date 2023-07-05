import {
  Component,
  OnChanges,
  OnInit,
  Input,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked
{
  @Input() item!: string;

  constructor() {
    console.log('AppComponent: constructor');
  }

  ngOnInit() {
    console.log('AppComponent: ngOnInit - 组件初始化');
  }

  ngOnChanges() {
    console.log('AppComponent: ngOnChanges - 输入属性变化');
  }

  ngAfterViewInit() {
    console.log('AppComponent: ngAfterViewInit - 视图初始化完成');
  }

  ngAfterViewChecked() {
    console.log('AppComponent: ngAfterViewChecked - 视图变更检测');
  }

  ngAfterContentInit() {
    console.log('AppComponent: ngAfterContentInit - 内容投影初始化完成');
  }

  ngAfterContentChecked() {
    console.log('AppComponent: ngAfterContentChecked - 内容投影变更检测');
  }

  ngOnDestroy() {
    console.log('AppComponent: ngOnDestroy - 组件销毁');
  }
}
