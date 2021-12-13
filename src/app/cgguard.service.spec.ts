import { TestBed } from '@angular/core/testing';

import { CgguardService } from './cgguard.service';

describe('CgguardService', () => {
  let service: CgguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
