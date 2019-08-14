import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {
  value={
    name:'poomani',
    element1:10,
    element2:10,
   
   

  }
  element2: any;

  constructor() { }

  ngOnInit() {
  }
  a=this.element2+this.element2
}
