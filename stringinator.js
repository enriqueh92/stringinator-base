const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
}; 

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  var item =_.reject(str.split(''), char => char === target).join('');
  console.log(item);
  return item;
}

const hasChar = function(str, target) {
  return _.some(str.split(''), test => test === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, letter => !isNaN(letter));
};

const filterToOnlyDigits = function(str) {
  return _.reject(str, digit => isNaN(digit) || digit === ' ').join('');
};

const truncateString = function(val, maxLength) {
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, val => truncateString(val, maxLength));
};

const countChars = function(str) {
  var strSplit = str.split('');
  return _.reduce(strSplit, (obj, val) => {
    if(obj[val] === undefined) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
    return obj;
  }, {});
};

const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};