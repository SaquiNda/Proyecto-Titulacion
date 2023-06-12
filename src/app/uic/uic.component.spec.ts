import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UicComponent } from './uic.component';

describe('UicComponent', () => {
  let component: UicComponent;
  let fixture: ComponentFixture<UicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UicComponent]
    });
    fixture = TestBed.createComponent(UicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
