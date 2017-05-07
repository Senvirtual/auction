import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit ,OnChanges{


  //利用注释来声明注入操作；此处声明一个变量作容器，在product的html声明注入的对应的值
  @Input()
  private rating:number = 0;
  @Input()
  private readOnly: boolean = true;
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();
  private stars:boolean[];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.stars=[];
    for(let i = 1;i <= 5;i++){
      this.stars.push(i>this.rating);
    }
  }

  clickStar(index: number) {
    if(!this.readOnly) {
      this.rating = index + 1;
      this.ngOnChanges();
      this.ratingChange.emit(this.rating)
    }

  }

}
