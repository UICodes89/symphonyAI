import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrviewsComponent } from './intrviews.component';

describe('IntrviewsComponent', () => {
  let component: IntrviewsComponent;
  let fixture: ComponentFixture<IntrviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
