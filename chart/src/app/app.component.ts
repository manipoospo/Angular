import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })

export class AppComponent {
   title='learn';
   mounths=["jan","fib","mar","etc"];
   isava=false;
   chemon(event){
       alert("month is changed");
   }
}