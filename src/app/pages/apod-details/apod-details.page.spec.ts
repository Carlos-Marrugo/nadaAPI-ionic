import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApodDetailsPage } from './apod-details.page';

describe('ApodDetailsPage', () => {
  let component: ApodDetailsPage;
  let fixture: ComponentFixture<ApodDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
