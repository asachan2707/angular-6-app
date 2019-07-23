import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lib-product-grid',
    templateUrl: './product-grid.component.html',
    styles: []
})
export class ProductGridComponent implements OnInit {

    @Input() item = {
        id: 1,
        productName: 'Test',
        productCode: 'Test-001',
        description: 'This is a test product',
        starRating: 0.0,
        date: new Date(),
        value: 0
    };

    constructor() { }

    ngOnInit() { }

}
