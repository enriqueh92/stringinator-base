const stringinator = require('../../stringinator');
const assert = require('chai').assert

describe('removeChar()', () => {
  it('removes a target char', () => {
     expect(stringinator.removeChar('bubbles', 'u')).toEqual('bbbles');
  });
});
 