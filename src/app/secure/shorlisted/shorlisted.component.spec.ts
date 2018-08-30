import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorlistedComponent } from './shorlisted.component';

describe('ShorlistedComponent', () => {
  let component: ShorlistedComponent;
  let fixture: ComponentFixture<ShorlistedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorlistedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
