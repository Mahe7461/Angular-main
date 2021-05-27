import { TestBed } from '@angular/core/testing';

import { CreateguardGuard } from './createguard.guard';

describe('CreateguardGuard', () => {
  let guard: CreateguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
