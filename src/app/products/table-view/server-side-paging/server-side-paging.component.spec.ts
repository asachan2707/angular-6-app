import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSidePagingComponent } from './server-side-paging.component';

describe('ServerSidePagingComponent', () => {
  let component: ServerSidePagingComponent;
  let fixture: ComponentFixture<ServerSidePagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSidePagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSidePagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
