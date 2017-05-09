import { TestBed, inject } from '@angular/core/testing';

import { ScreamingIntoTheVoidService } from './screaming-into-the-void.service';

describe('ScreamingIntoTheVoidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreamingIntoTheVoidService]
    });
  });

  it('should ...', inject([ScreamingIntoTheVoidService], (service: ScreamingIntoTheVoidService) => {
    expect(service).toBeTruthy();
  }));
});
