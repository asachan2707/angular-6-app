import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pm-server-side-paging',
    templateUrl: './server-side-paging.component.html',
    styleUrls: ['./server-side-paging.component.css']
})
export class ServerSidePagingComponent implements OnInit {

    data = [];
    errorMessage: '';
    page = 1;
    pageSize = 20;
    sub = new Subscription();

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.sub.add(this.productService.getSelectedPageData(this.pageSize, this.page).subscribe(
            (res: any) => {
                this.data = res;
                // console.log('ServerSidePagingComponent: ', this.data);
            },
            (err: any) => this.errorMessage = err.error
        ));
    }

    pageChanged($event) {
        // console.log('selected page: ', $event);
        this.page = $event;
        this.productService.getSelectedPageData(this.pageSize, this.page);
    }
}
