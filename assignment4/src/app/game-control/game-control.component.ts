import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter: number = 0;
  holder: any;
  @Output() strt = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(event: any) {
    this.holder = setInterval(this.increaseCounter, 1000);
  }

  onStopGame(event: any)  {
    clearInterval(this.holder);
  }

  increaseCounter() {
    this.counter += 1;
    this.strt.emit(this.counter);
  }

}
