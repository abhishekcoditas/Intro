import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Abhishek Mankar';
  jsonValue = {
    A : "Hello",
    B : "Abhi"
  }

  constructor(private httpService : HttpService){}

  date = new Date();
  onClick(){
    //console.log('Button CLicked' , this.title);
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((response)=>{
      this.jsonValue = response;
    })
  }

}
