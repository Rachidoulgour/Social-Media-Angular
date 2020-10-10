import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatepassComponent } from './validatepass.component';

describe('ValidatepassComponent', () => {
  let component: ValidatepassComponent;
  let fixture: ComponentFixture<ValidatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
