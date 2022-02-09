import { Component } from '@angular/core';

@Component({
  selector: 'root-directive',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string= 'my_first_app';
  name:string = "Sean";
  age:number = 22;
}
