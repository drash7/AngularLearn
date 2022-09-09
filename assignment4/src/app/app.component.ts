import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';
  evenElems: string[] = [];
  oddElems: string[] = [];

  onValueChanged(count: number)  {
    if (count % 2 == 0) {
      this.evenElems.push("Even - NUMBER");
    }
    else  {
      this.oddElems.push("Odd - NUMBER");
    }
  }
}
