import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Hello Abhishek Mankar';
  jsonValue = {
    A : "Hello",
    B : "Abhi"
  }

  userObject = {
    name : "Abhishek",
    age : 21,
    id : 0,
    isColored : true
  }

  showUser : boolean = true;

  constructor(private httpService : HttpService,
              private router : Router){
                this.router.events.subscribe((e)=>{
                  console.log(e);
                })
              }

  goToRoute(route:string = '/fourth'):void{
    this.router.navigateByUrl(route).then(()=>{
      console.log(this.router.url);
    }); 
  }            

  date = new Date();
  onClick(){
    console.log('Button CLicked' , this.title);
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((response)=>{
      this.jsonValue = response;
    })
  }

  onOutput(event:any){
    this.userObject = event;
    console.log(event);
  }

  posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts');

  ngOnInit(){
    //this.getPosts(); 
  }

}
