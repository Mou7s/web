import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  Observable,
  of,
  from,
  range,
  timer,
  interval,
  map,
  defer,
  tap,
  filter,
  concat,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    // 创建两个发出数字的 Observable
    const numbersObservable1 = from([1, 2, 3]);
    const numbersObservable2 = from([4, 5, 6]);

    // 使用 concat 操作符将两个 Observable 合并到一个 Observable 中
    const numbersObservable = numbersObservable1.pipe(
      concat(numbersObservable2)
    );

    // 订阅 Observable
    numbersObservable.subscribe((x) => {
      console.log(x);
    });
  }
}
