import { TestBed } from '@angular/core/testing';

import { LibAngularRatingService } from './lib-angular-rating.service';

describe('LibAngularRatingService', () => {
  let service: LibAngularRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibAngularRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
