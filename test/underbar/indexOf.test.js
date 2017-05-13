const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['hi', 'hey', 'hello'];
    expect(_.indexOf(arr, 'hi')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['hi', 'hey', 'hello'];
    expect(_.indexOf(arr, 'hello')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['hi', 'hey', 'hello'];
    expect(_.indexOf(arr, 'yo')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['hi', 'hey', 'hello', 'hey'];
    expect(_.indexOf(arr, 'hey')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const arr = ['hi', 'hey', 'hello', 'hey', 'hello'];
    expect(_.indexOf(arr, 'hey', 2)).toBe(3);
  });

});