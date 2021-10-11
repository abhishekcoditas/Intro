import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , FormBuilder, Validators} from '@angular/forms';
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

  testProp = new FormControl('');

  profileForm = new FormGroup({
    firstName : new FormControl('' , Validators.min(2)),
    lastName : new FormControl('')
  })



  showUser : boolean = true;

  constructor(private httpService : HttpService,
              private router : Router, private fb : FormBuilder){
                this.router.events.subscribe((e)=>{
                  console.log(e);
                })
              }

    modifyFormControl():void{
    this.testProp.setValue('Hello World')
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
