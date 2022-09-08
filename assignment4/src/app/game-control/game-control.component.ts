import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  strt: any;
  @Output() counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(event: any) {
    this.strt = setInterval(this.increaseCounter, 5000);
  }

  onStopGame(event: any)  {
    clearInterval(this.strt);
  }

  increaseCounter() {
    this.counter += 1;
  }

}
