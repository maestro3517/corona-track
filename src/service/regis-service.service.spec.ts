import { TestBed } from '@angular/core/testing';

import { Authservice } from './Auth-service';

describe('RegisServiceService', () => {
  let service: Authservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
