import { TestBed } from '@angular/core/testing';

import { EmployeeGradeService } from './employee-grade.service';

describe('EmployeeGradeService', () => {
  let service: EmployeeGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
