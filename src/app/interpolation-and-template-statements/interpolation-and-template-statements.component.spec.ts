import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationAndTemplateStatementsComponent } from './interpolation-and-template-statements.component';

describe('InterpolationAndTemplateStatementsComponent', () => {
  let component: InterpolationAndTemplateStatementsComponent;
  let fixture: ComponentFixture<InterpolationAndTemplateStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationAndTemplateStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationAndTemplateStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
