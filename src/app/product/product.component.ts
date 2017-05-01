import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>;
  //与前台进行属性绑定
  private imgUrl="http://placehold.it/320x150";
  constructor() {}
//生命周期钩子的一种，在初始化时调用一次
  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"学习过程中创建的第一个类的实体对象一号",["电子商品","硬件设备"]),
      new Product(2.12,"第二个商品",2.99,2.5,"学习过程中创建的第一个类的实体对象二号",["野外露营设备"]),
      new Product(3.12,"第三个商品",3.99,1.5,"学习过程中创建的第一个类的实体对象三号",["图书"]),
      new Product(4.12,"第四个商品",4.99,3.5,"学习过程中创建的第一个类的实体对象四号",["电子商品"]),
      new Product(5.12,"第五个商品",5.99,3.5,"学习过程中创建的第一个类的实体对象五号",["硬件设备"]),
      new Product(6.12,"第六个商品",6.99,4.5,"学习过程中创建的第一个类的实体对象六号",["电子商品","硬件设备"])
    ];
    //angular通过操作后台存储数据实现html界面改变而非操作DOM改变html
    this.products.push(new Product(7.12,"第七个商品",6.99,4.5,"学习过程中创建的第一个类的实体对象七号",["电子商品","硬件设备"]));
    this.products.push(new Product(7.12,"第八个商品",6.99,4.5,"学习过程中创建的第一个类的实体对象八号",["电子商品","硬件设备"]));
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>){

  }
}
