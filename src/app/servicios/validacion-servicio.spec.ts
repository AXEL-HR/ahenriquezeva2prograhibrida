import { TestBed } from '@angular/core/testing';

import { ValidacionServicio } from './validacion-servicio';

describe('ValidacionServicio', () => {
  let service: ValidacionServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacionServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
