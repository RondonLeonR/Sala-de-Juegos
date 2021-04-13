import { TestBed } from '@angular/core/testing';

import { GameRptService } from './game-rpt.service';

describe('GameRptService', () => {
  let service: GameRptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
