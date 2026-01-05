import { TestBed } from '@angular/core/testing';

import { Frase } from './frase';

describe('Frase', () => {
  let service: Frase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Frase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
