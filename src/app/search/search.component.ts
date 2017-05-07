import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formMoudel: FormsModule;
  constructor(formBuilder: FormBuilder) {
    this.formMoudel = formBuilder.group({
      title: ['',Validators.minLength(3)],
      price: [''],
      category: [''],

    })
  }

  ngOnInit() {
  }

}
