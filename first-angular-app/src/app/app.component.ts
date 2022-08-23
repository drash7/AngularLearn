import { Component } from '@angular/core';

@Component({
  // can select by attribute by doing [app-root]
  // can select by class by doing .app-root
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // styles: [`
  //   h3  {
  //     color: dodgerblue;
  //   }
  // `]
  styles: [`
    .future {
      color: white;
    }
  `]
})
export class AppComponent {
display = false;
btnClickCount = 0
btnClicks = []

  onDisplayDetails(Event: any)  {
    this.display = !this.display;
    this.btnClickCount += 1;
    this.btnClicks.push("Button click: " + this.btnClickCount);
  }

  getBackgroundColor(i)  {
    return i > 4 ? 'blue' : 'white';
  }

  getColor(i)  {
    return i > 4 ? 'white' : 'black';
  }
}
