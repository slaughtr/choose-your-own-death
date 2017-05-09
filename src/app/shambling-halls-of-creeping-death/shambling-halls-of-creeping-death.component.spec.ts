import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamblingHallsOfCreepingDeathComponent } from './shambling-halls-of-creeping-death.component';

describe('ShamblingHallsOfCreepingDeathComponent', () => {
  let component: ShamblingHallsOfCreepingDeathComponent;
  let fixture: ComponentFixture<ShamblingHallsOfCreepingDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShamblingHallsOfCreepingDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShamblingHallsOfCreepingDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
