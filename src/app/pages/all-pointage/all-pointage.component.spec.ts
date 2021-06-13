import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPointageComponent } from './all-pointage.component';

describe('AllPointageComponent', () => {
  let component: AllPointageComponent;
  let fixture: ComponentFixture<AllPointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPointageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
