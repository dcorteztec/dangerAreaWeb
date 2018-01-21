import { TestBed, inject } from '@angular/core/testing';

import { DatamodelmapService } from './datamodelmap.service';

describe('DatamodelmapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatamodelmapService]
    });
  });

  it('should be created', inject([DatamodelmapService], (service: DatamodelmapService) => {
    expect(service).toBeTruthy();
  }));
});
