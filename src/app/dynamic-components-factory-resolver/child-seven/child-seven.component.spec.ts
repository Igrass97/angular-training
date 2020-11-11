import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSevenComponent } from './child-seven.component';

describe('ChildSevenComponent', () => {
  let component: ChildSevenComponent;
  let fixture: ComponentFixture<ChildSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
