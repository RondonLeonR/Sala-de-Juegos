import { TestBed } from '@angular/core/testing';

import { InfoGitService } from './info-git.service';

describe('InfoGitService', () => {
  let service: InfoGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
