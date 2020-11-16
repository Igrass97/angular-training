import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeClassStyleBindingComponent } from './attribute-class-style-binding.component';

describe('AttributeClassStyleBindingComponent', () => {
  let component: AttributeClassStyleBindingComponent;
  let fixture: ComponentFixture<AttributeClassStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeClassStyleBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeClassStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
