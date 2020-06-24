import { TestBed } from '@angular/core/testing';

import { KosmetykService } from './kosmetyk.service';

describe('KosmetykService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KosmetykService = TestBed.get(KosmetykService);
    expect(service).toBeTruthy();
  });
});
