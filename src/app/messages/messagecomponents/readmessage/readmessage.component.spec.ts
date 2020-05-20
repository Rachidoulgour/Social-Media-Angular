import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmessageComponent } from './readmessage.component';

describe('ReadmessageComponent', () => {
  let component: ReadmessageComponent;
  let fixture: ComponentFixture<ReadmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
