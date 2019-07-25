import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { Subscription } from 'rxjs';

@Component({
    selector: 'pm-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

    // data: any;
    // errorMessage: '';
    // sub = new Subscription();

    constructor(
        // private productService: ProductService
        ) { }

    ngOnInit() {
    //     this.sub.add(this.productService.getBulkData().subscribe(
    //         (data: any) => {
    //             this.data = data;
    //             console.log('test: ', this.data.length);
    //         },
    //         (err: any) => this.errorMessage = err.error
    //     ));
    }
}
