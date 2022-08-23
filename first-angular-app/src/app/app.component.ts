import { Component } from '@angular/core';

@Component({
  // can select by attribute by doing [app-root]
  // can select by class by doing .app-root
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3  {
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent {
  username = "";

  onDeleteUsername(event: any)  {
    this.username = "";
  }
}
