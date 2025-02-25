import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApodListPage } from './apod-list.page';

describe('ApodListPage', () => {
  let component: ApodListPage;
  let fixture: ComponentFixture<ApodListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
