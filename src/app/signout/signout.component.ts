import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  msg!: string;
  constructor() { }

  ngOnInit(): void {
  }

  SignUpTo(){
    this. msg="your Registration was done sucessfully";
    return this.msg;
  }

}
