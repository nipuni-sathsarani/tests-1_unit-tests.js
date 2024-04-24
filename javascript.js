const assert = require('chai').assert;

suite('Unit Tests', function(){
  
  // Test #1
  // Change assert to assert.isNull or assert.isNotNull
  test('#1 - #isNull, #isNotNull', function(){
    assert.isNotNull('null', 'this is an optional message');
  });
});