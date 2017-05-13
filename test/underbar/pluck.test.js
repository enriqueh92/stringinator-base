const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
     const people = [
      { name: 'Enrique', age: 24},
      { name: 'Maria', age: 26},
      { name: 'Bethany', age: 25}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([24, 26, 25]);
  });

});