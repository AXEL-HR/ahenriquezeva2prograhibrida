import { TestBed } from '@angular/core/testing';

import { FraseServicio } from './frase-servicio';

describe('Frase', () => {
  let service: FraseServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraseServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
