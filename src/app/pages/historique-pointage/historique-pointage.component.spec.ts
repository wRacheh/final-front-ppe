import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePointageComponent } from './historique-pointage.component';

describe('HistoriquePointageComponent', () => {
  let component: HistoriquePointageComponent;
  let fixture: ComponentFixture<HistoriquePointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquePointageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
