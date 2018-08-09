import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFeedbackComponent } from './request-feedback.component';

describe('RequestFeedbackComponent', () => {
  let component: RequestFeedbackComponent;
  let fixture: ComponentFixture<RequestFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
