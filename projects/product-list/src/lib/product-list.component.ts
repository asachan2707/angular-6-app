import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ram-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  @Input() name = 'test';
  @Input() items = [];
  constructor() { }

  ngOnInit() {
  }

}
