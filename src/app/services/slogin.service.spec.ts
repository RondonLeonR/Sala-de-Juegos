import { TestBed } from '@angular/core/testing';

import { SLoginService } from './slogin.service';

describe('SLoginService', () => {
  let service: SLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
