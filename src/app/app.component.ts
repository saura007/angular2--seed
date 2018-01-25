import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  constructor(private aoo: HelloService) {
    this.aoo.abc().subscribe((resp) => {this.title = JSON.stringify(resp); });
  }
}
