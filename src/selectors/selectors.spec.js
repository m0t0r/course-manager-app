import expect from 'expect';
import { formatAuthorsForDropdown } from './selectors';

describe('Selectors: ', () => {

  it('formatAuthorsForDropdown should format data for dropdown', () => {
    const authors = [
      {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
      {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
    ];

    const expected = [
      {value: 'cory-house', text: 'Cory House'},
      {value: 'scott-allen', text: 'Scott Allen'}
    ];

    expect(formatAuthorsForDropdown(authors)).toEqual(expected);
  });
});
