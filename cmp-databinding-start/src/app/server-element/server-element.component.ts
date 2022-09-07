import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges {
  // the @Input decorator can be used to bind to our own properties
  // can use an alias provided within parentheses to refer to the property as something else outside this component
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

}
