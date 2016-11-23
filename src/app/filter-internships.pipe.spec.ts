import { TestBed, inject, async,getTestBed } from '@angular/core/testing';
import { FilterInternships } from './filter-internships.pipe';

describe('Internships test', () => {
  beforeEach(() => {
    this.internships = [
      {_id: 11, initials: 'chrk' },
      {_id: 12, initials: 'asbc' },
      {_id: 13, initials: 'clbo' },
      {_id: 14, initials: 'cahl' },
      {_id: 15, initials: 'laco' },
    ];

    this.internshipsInvalid = [
      {_id: 11 },
      {_id: 12, initials: 'asbc' },
      {_id: 13, initials: 'clbo' },
      {_id: 14, initials: 'cahl' },
      {_id: 15, initials: 'laco' },
    ];


    TestBed.configureTestingModule({
      declarations: [
        FilterInternships
      ]
    })
  });

  describe("FilterInternships", () => {
    let filter = new FilterInternships();

    it('No search string returns array', () => {
      let result = filter.transform(this.internships, '');
      expect(result.length).toBe(5);
      expect(result[0].initials).toBe('chrk');
      expect(result[4].initials).toBe('laco');
    });

    it('No search string returns array', () => {
      let result = filter.transform(this.internships, '');
      expect(result.length).toBe(5);
    });

  });
});
