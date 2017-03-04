/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicService } from './public.service.ts';

describe('PublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicService]
    });
  });

  it('should ...', inject([PublicService], (service: PublicService) => {
    expect(service).toBeTruthy();
  }));
});
