import { TestBed } from '@angular/core/testing';

import { MisraService } from './misra.service';

describe('MisraService', () => {
  let service: MisraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
