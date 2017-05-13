const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const letters = ['a', 'b', 'c', 'd', 'e'];
    let count = 0;
    _.each(letters, function(ele, i, arr) {
      expect(ele).toEqual(arr[i]);
      count += 1;
    });
    expect(count).toBe(5);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    };
    let count = 0;
    _.each(arrayLikeObj, function(ele, i, iteratedArrayLikeObj) {
      expect(ele).toEqual(iteratedArrayLikeObj[i]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name: 'Enrique',
      age: 24,
      occupation: 'cool guy'
    };
    let count = 0;
    _.each(obj, function(val, key, iteratedObj) {
      expect(val).toEqual(iteratedObj[key]);
      count += 1;
    });
    expect(count).toBe(3);
  });
});

