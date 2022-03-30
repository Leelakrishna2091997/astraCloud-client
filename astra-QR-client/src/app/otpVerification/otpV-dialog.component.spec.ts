import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVDialogComponent } from './otpV-dialog.component';

describe('OtpVDialogComponent', () => {
  let component: OtpVDialogComponent;
  let fixture: ComponentFixture<OtpVDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpVDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpVDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
