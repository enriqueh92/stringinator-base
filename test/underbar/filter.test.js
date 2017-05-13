const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
     const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Enrique',
      title: 'Cool guy',
      age: 24,
      weight: 200,
    };

    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([24, 200]);
  });
});