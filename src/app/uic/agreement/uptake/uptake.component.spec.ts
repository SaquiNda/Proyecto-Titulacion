import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptakeComponent } from './uptake.component';

describe('UptakeComponent', () => {
  let component: UptakeComponent;
  let fixture: ComponentFixture<UptakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UptakeComponent]
    });
    fixture = TestBed.createComponent(UptakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
