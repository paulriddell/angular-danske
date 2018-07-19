import { TestBed, inject } from '@angular/core/testing';

import { GitHubRepoService } from './githubrepo.service';

describe('GitHubRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubRepoService]
    });
  });

  it('should be created', inject([GitHubRepoService], (service: GitHubRepoService) => {
    expect(service).toBeTruthy();
  }));
});
