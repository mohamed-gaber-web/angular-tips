import { ChildComponent } from './child/child.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  titles = ['angular-tips', 'angular-basics', 'angular-advanced'];
}
