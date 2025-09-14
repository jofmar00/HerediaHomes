import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pisos } from './pisos';

describe('Pisos', () => {
  let component: Pisos;
  let fixture: ComponentFixture<Pisos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pisos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pisos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
