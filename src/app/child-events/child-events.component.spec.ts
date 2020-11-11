import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEventsComponent } from './child-events.component';

describe('ChildEventsComponent', () => {
  let component: ChildEventsComponent;
  let fixture: ComponentFixture<ChildEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
