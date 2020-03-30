import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicateComponent } from './publicate.component';

describe('PublicateComponent', () => {
  let component: PublicateComponent;
  let fixture: ComponentFixture<PublicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
