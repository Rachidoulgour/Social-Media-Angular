import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatepoliticsComponent } from './privatepolitics.component';

describe('PrivatepoliticsComponent', () => {
  let component: PrivatepoliticsComponent;
  let fixture: ComponentFixture<PrivatepoliticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatepoliticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatepoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
