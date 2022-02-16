import { TestBed } from '@angular/core/testing';

import { PokeReviewService } from './poke-review.service';

describe('PokeReviewService', () => {
  let service: PokeReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
