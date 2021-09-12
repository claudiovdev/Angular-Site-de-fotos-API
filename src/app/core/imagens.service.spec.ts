import { TestBed } from '@angular/core/testing';

import { ImagensService } from './imagens.service';

describe('ImagensService', () => {
  let service: ImagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
