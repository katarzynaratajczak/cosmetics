import { TestBed } from '@angular/core/testing';

import { KosmetykPropertiesService } from './kosmetyk-properties.service';

describe('KosmetykPropertiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KosmetykPropertiesService = TestBed.get(KosmetykPropertiesService);
    expect(service).toBeTruthy();
  });
});
