import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intro';
  jsonValue = {
    A : "Hello",
    B : "Abhi"
  }

  date = new Date();
  onClick(){
    console.log('Button CLicked' , this.title);
  }
}
