import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativefooterComponent } from './creativefooter.component';

describe('CreativefooterComponent', () => {
  let component: CreativefooterComponent;
  let fixture: ComponentFixture<CreativefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
