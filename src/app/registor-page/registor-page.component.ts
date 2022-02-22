import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registor-page',
  templateUrl: './registor-page.component.html',
  styleUrls: ['./registor-page.component.css']
})
export class RegistorPageComponent implements OnInit {
 
  msg!: string;
  constructor() { }

  ngOnInit(): void {
  }

  registerTo(){
    this. msg="your Registration was done sucessfully";
     return this.msg;
  }

}
