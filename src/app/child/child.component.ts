import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Input() myTitle: string[];
  // message: string = 'hello ahmed';

  constructor() {
    // this.myTitle = [];
  }

  ngOnInit(): void {}
}
