import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationWithServicesComponent } from './communication-with-services.component';

describe('CommunicationWithServicesComponent', () => {
  let component: CommunicationWithServicesComponent;
  let fixture: ComponentFixture<CommunicationWithServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationWithServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationWithServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
