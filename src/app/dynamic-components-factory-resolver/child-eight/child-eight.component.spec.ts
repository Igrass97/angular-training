import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEightComponent } from './child-eight.component';

describe('ChildEightComponent', () => {
  let component: ChildEightComponent;
  let fixture: ComponentFixture<ChildEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
