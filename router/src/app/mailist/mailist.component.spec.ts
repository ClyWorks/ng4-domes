import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailistComponent } from './mailist.component';

describe('MailistComponent', () => {
  let component: MailistComponent;
  let fixture: ComponentFixture<MailistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
