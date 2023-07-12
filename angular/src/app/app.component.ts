import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  name: string = 'Murphy';

  @ViewChild('title1', { static: false }) ctitle1!: ElementRef;
  @ViewChild('title2', { static: false }) ctitle2!: ElementRef;

  ngOnInit() {
    this.logTitleValues('ngOnInit');
  }

  ngAfterViewInit() {
    this.logTitleValues('ngAfterViewInit');
  }

  private logTitleValues(hook: string) {
    console.log(`---- ${hook} ----`);
    console.log(`ctitle1: ${this.getTitleValue(this.ctitle1)}`);
    console.log(`ctitle2: ${this.getTitleValue(this.ctitle2)}`);
  }

  private getTitleValue(element: ElementRef | undefined): string {
    return element ? element.nativeElement.innerHTML : 'Element not found';
  }
}
