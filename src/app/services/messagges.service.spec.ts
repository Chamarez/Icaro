import { TestBed } from '@angular/core/testing';

import { MessaggesService } from './messagges.service';

describe('MessaggesService', () => {
  let service: MessaggesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessaggesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
