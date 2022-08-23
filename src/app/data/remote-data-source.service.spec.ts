import { TestBed } from '@angular/core/testing';

import { RemoteDataSourceService } from './remote-data-source.service';

describe('RemoteDataSourceService', () => {
  let service: RemoteDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
