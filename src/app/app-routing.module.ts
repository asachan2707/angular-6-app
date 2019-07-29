import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './user/auth-guard.service';

import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductGridComponent } from './products/product-grid/product-grid.component';
import { ProductChartComponent } from './products/product-chart/product-chart.component';
import { ProductTableComponent } from './products/table-view/product-table/product-table.component';
import { ProductLibraryComponent } from './products/table-view/product-library/product-library.component';
import { TableViewComponent } from './products/table-view/table-view.component';
import { ProductPaginationComponent } from './products/table-view/product-pagination/product-pagination.component';
import { ServerSidePagingComponent } from './products/table-view/server-side-paging/server-side-paging.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product-grid', component: ProductGridComponent },
      {
        path: '',
        component: TableViewComponent,
        children: [
          { path: 'product-table', component: ProductTableComponent },
          { path: 'product-pagination', component: ProductPaginationComponent },
          { path: 'server-pagination', component: ServerSidePagingComponent },
          { path: 'library-list', component: ProductLibraryComponent },
          { path: '', redirectTo: 'library-list', pathMatch: 'full' }
        ]
      },
      { path: 'product-chart', canActivate: [AuthGuard], component: ProductChartComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

export const ROUTING = RouterModule.forRoot(appRoutes,
  {
    useHash: true,
    enableTracing: false
  });
