import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendExtensionComponent } from './send-extension.component';

describe('SendExtensionComponent', () => {
  let component: SendExtensionComponent;
  let fixture: ComponentFixture<SendExtensionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendExtensionComponent]
    });
    fixture = TestBed.createComponent(SendExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
