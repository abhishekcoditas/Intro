import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface userInterface{
  name : string,
  age : number,
  id : number,
  isColored : boolean
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isColored : boolean = false;

  @Input() user:userInterface

  @Output() userEvent : EventEmitter<userInterface>;

  constructor() {
    this.user= {} as userInterface;
    this.userEvent = new EventEmitter<userInterface>();
   }

  ngOnInit(): void {
    this.isColored = this.user.isColored;
  }

  sendUserEvent(): void{
    this.userEvent.emit(this.user)
  }

}
