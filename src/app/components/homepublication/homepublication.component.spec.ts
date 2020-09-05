import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepublicationComponent } from './homepublication.component';

describe('HomepublicationComponent', () => {
  let component: HomepublicationComponent;
  let fixture: ComponentFixture<HomepublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
