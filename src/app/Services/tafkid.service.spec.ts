import { TestBed } from '@angular/core/testing';

import { TafkidService } from './tafkid.service';

describe('TafkidService', () => {
  let service: TafkidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TafkidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
