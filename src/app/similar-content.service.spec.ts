import { TestBed } from '@angular/core/testing';

import { SimilarContentService } from './similar-content.service';

describe('SimilarContentService', () => {
  let service: SimilarContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimilarContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
