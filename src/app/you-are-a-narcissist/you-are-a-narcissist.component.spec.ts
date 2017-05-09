import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouAreANarcissistComponent } from './you-are-a-narcissist.component';

describe('YouAreANarcissistComponent', () => {
  let component: YouAreANarcissistComponent;
  let fixture: ComponentFixture<YouAreANarcissistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouAreANarcissistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouAreANarcissistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
