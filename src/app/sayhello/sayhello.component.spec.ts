import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayhelloComponent } from './sayhello.component';

describe('SayhelloComponent', () => {
  let component: SayhelloComponent;
  let fixture: ComponentFixture<SayhelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayhelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayhelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
