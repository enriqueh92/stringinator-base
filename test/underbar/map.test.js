const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (ele) => ele * ele);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });
});