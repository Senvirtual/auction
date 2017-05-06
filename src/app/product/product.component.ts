import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../share/product.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  private keyword: string;
  private titleFilter: FormControl = new FormControl();
  private products: Product[]
  //与前台进行属性绑定
  private imgUrl="http://placehold.it/320x150";
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword = value
      )
  }
//生命周期钩子的一种，在初始化时调用一次
  ngOnInit() {
    this.products = this.productService.getProducts();


  }

}

