import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso } from './piso';

describe('Piso', () => {
  let component: Piso;
  let fixture: ComponentFixture<Piso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Piso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Piso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
