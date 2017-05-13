const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'tacos',
      side: null,
      sauce: 'chipotle',
      drink: null,
      dessert: 'flan'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['tacos', 'chipotle', 'flan']);
  });

});