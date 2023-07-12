import {
  Component,
  AfterViewInit,
  ViewChild,
  AfterContentInit,
  OnInit,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent
  implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked
{
  name: string = 'Murphy';

  @ViewChild('title1', { static: false })
  ctitle1!: ElementRef;

  @ViewChild('title2', { static: true })
  ctitle2!: ElementRef;

  // 方法1
  ngOnInit() {
    console.log('ctitle1 in ngOnInit : ' + this.getTitleValue(this.ctitle1));
    console.log('ctitle2 in ngOnInit : ' + this.getTitleValue(this.ctitle2));
  }

  // 方法2
  ngAfterContentInit() {
    console.log(
      'ctitle1 in ngAfterContentInit : ' + this.getTitleValue(this.ctitle1)
    );
    console.log(
      'ctitle2 in ngAfterContentInit : ' + this.getTitleValue(this.ctitle2)
    );
  }

  // 方法3
  ngAfterViewInit() {
    console.log(
      'ctitle1 in ngAfterViewInit : ' + this.getTitleValue(this.ctitle1)
    );
    console.log(
      'ctitle2 in ngAfterViewInit : ' + this.getTitleValue(this.ctitle2)
    );
  }

  // 方法4
  ngAfterViewChecked() {
    console.log(
      'ctitle1 in ngAfterViewChecked : ' + this.getTitleValue(this.ctitle1)
    );
    console.log(
      'ctitle2 in ngAfterViewChecked : ' + this.getTitleValue(this.ctitle2)
    );
  }

  // 如果传入的元素不为空，则输出该元素的文本内容
  getTitleValue(v: ElementRef) {
    return v ? v.nativeElement.innerHTML : v;
  }
}
