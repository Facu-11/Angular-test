import { TestBed } from '@angular/core/testing';

import { StaticDataSvService } from './static-data-sv.service';

describe('StaticDataSvService', () => {
  let service: StaticDataSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticDataSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
