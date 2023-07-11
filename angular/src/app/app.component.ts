import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  message = 'My Message';
  imageURL = 'https://i.picsum.photos/id/885/200/100.jpg';
  ngAfterViewInit() {
    setInterval(() => (this.message = Date.now().toString()), 1000);
    setInterval(() => {
      (this.imageURL =
        'https://picsum.photos/200/100?random&t=' + Math.random()),
        2000;
    });
  }
}
