import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeDirectiveComponent } from './custome-directive.component';

describe('CustomeDirectiveComponent', () => {
  let component: CustomeDirectiveComponent;
  let fixture: ComponentFixture<CustomeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
