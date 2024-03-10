import { TestBed } from '@angular/core/testing';

import { FavGamesService } from './fav-games.service';

describe('FavGamesService', () => {
  let service: FavGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
