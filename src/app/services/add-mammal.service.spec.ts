import { TestBed } from '@angular/core/testing';

import { AddMammalService } from './add-mammal.service';

describe('AddMammalService', () => {
  let service: AddMammalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMammalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
