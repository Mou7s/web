import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // 组件的属性和方法在这里定义

  startTimer() {
    of(1, 2, 3) // 创建3个数字的数据流
      .subscribe({
        next: (value: number) => console.log('next:', value),
        error: (err: any) => console.log('error:', err),
        complete: () => console.log('the end'),
      });
  }
}
