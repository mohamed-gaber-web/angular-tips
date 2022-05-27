import { ChildComponent } from './child/child.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { catchError, EMPTY, fromEvent, interval, NEVER, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  // titles = ['angular-tips', 'angular-basics', 'angular-advanced'];
  url: string = 'https://jsonplaceholder.typicode.com/postsx';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // ** switchMap[ 2 - observable cancel first observable and run another observablle ]
    const click = fromEvent(document, 'click');
    // click.subscribe(() => {
    //   interval(1000).subscribe(x => console.log(x))
    // })
    // click.pipe(switchMap(() => {
    //   return interval(1000)
    // })).subscribe(x => console.log(x))

    // ** catchError [ error, sourceObs ] return [ observable - erorr - source Observable ]
    // this.http.get(this.url)
    //   .pipe(catchError((error, sourceObs$) => {
         // return of('error', 'error', error)
    //     throw new Error('server is timed out');
         // return sourceObs$;
         // return EMPTY;
         // return NEVER;
    //   }))
    //   .subscribe(
    //     response => console.log(response),
    //     error => console.log(error.message),
    //     () => {console.log('completed')}
    //   )

  }
}
