import { TestBed } from '@angular/core/testing';

import { GameMemotestService } from './game-memotest.service';

describe('GameMemotestService', () => {
  let service: GameMemotestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameMemotestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
