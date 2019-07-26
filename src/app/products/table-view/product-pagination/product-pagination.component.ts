import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.css']
})
export class ProductPaginationComponent implements OnInit {

  data = [];
  errorMessage: '';
  p = 1;
  sub = new Subscription();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.sub.add(this.productService.getBulkData().subscribe(
      (data: any) => {
          this.data = data;
          // console.log('ProductPaginationComponent: ', this.data.length);
      },
      (err: any) => this.errorMessage = err.error
  ));
  }
}
