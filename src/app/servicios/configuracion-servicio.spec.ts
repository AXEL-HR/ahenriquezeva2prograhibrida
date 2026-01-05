import { TestBed } from '@angular/core/testing';

import { ConfiguracionServicio } from './configuracion-servicio';

describe('ConfiguracionServicio', () => {
  let service: ConfiguracionServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
