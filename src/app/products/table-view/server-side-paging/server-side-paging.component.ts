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
    sub: Subscription = new Subscription();

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.wsrequest();
    }

    wsrequest() {
        this.sub = this.productService.getSelectedPageData(this.pageSize, this.page).subscribe(
            (res: any) => {
                this.data = res;
            },
            (err: any) => this.errorMessage = err.error
        );
    }

    pageChanged($event) {
        this.page = $event;
        if (this.sub) {
            this.sub.unsubscribe();
            this.wsrequest();
        }
    }
}
