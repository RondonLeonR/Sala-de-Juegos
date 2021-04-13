import { TestBed } from '@angular/core/testing';

import { ChatRealtimeService } from './chat-realtime.service';

describe('ChatRealtimeService', () => {
  let service: ChatRealtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatRealtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
