import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pm-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

    data: any;
    errorMessage: '';
    sub = new Subscription();

    constructor(private productService: ProductService) { }


    ngOnInit() {
        // this.generateLocalBulkData();

        this.sub.add(this.productService.getBulkData().subscribe(
            (data: any) => {
                this.data = data;
                // console.log('test: ', this.data.length);
            },
            (err: any) => this.errorMessage = err.error
        ));

    }

    // generateLocalBulkData() {
    //     let temp = [];
    //     setTimeout(() => {
    //         temp = this.generateObj(temp);
    //         this.data = temp;
    //         console.log('this.data: ', JSON.stringify(this.data));
    //     }, 1000);
    // }

    // generateObj(temp) {
    //     for (let i = 0; i <= 999999; i++) {
    //         const obj = {
    //             id: 'Product-id_' + (i + 1),
    //             name: 'Product-' + (i + 1),
    //             type: (i % 3) === 0 ? 'Electronic' : 'Home-appliances',
    //             price: Math.random() * (2000 - 200) + 200,
    //             is_available: (i % 2) === 0 ? true : false
    //         };
    //         temp.push(obj);
    //     }
    //     return temp;
    // }

}
