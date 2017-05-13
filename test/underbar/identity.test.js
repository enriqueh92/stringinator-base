const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(1)).toBe(1);
  });

  it('returns the same array if given an array', () => {
    const val = [1,2,3,4,5];
    expect(_.identity(val)).toBe(val);
  });

  it('returns the same object if given an object', () => {
    const val = {
      'Name': 'Enrique'
    };
    expect(_.identity(val)).toBe(val);
  });
});