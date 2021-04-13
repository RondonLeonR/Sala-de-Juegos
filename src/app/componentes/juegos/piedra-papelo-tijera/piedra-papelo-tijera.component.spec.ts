import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapeloTijeraComponent } from './piedra-papelo-tijera.component';

describe('PiedraPapeloTijeraComponent', () => {
  let component: PiedraPapeloTijeraComponent;
  let fixture: ComponentFixture<PiedraPapeloTijeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedraPapeloTijeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapeloTijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
