import { TestBed } from '@angular/core/testing';

import { DoctorNotesService } from './doctor-notes.service';

describe('DoctorNotesService', () => {
  let service: DoctorNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
