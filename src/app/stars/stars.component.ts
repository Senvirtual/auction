import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  //利用注释来声明注入操作；此处声明一个变量作容器，在product的html声明注入的对应的值
  @Input()
  private rating:number = 0;

  private stars:boolean[];
  constructor() { }

  ngOnInit() {
    this.stars=[];
    for(let i = 1;i <= 5;i++){
      this.stars.push(i>this.rating);
    }
  }

}
