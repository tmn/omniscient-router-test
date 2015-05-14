var assert = require('assert')

describe('Test', function () {
  it ('Should pass', function () {
    var value = 1;
    assert.equal(value, 1);
  });

  it ('Should fail', function () {
    var value = 2;
    assert.equal(value, 1);
  });
})
