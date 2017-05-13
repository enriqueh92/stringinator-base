const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 23)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const cars = {
      'car1': 'BMW',
      'car2': 'Mercedes',
      'car3': 'Ford',
      'car4': 'Ferrari'
    };
    expect(_.contains(cars, 'Ferrari')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const cars = {
      'car1': 'BMW',
      'car2': 'Mercedes',
      'car3': 'Ford',
      'car4': 'Ferrari'
    };
    expect(_.contains(cars, 'Lamborghini')).toBe(false);
  });

});