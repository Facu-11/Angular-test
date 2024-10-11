import { TestBed } from '@angular/core/testing';

import { FooterHeightSvService } from './footer-height-sv.service';

describe('FooterHeightSvService', () => {
  let service: FooterHeightSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterHeightSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
