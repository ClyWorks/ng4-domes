import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Get404Component } from './get404.component';

describe('Get404Component', () => {
  let component: Get404Component;
  let fixture: ComponentFixture<Get404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Get404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Get404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
