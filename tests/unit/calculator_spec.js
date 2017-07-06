var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add to running total', function(){
    calculator.add(2);
    assert.equal(2, calculator.runningTotal);
  })

  it('can subtract from running total', function(){
    calculator.subtract(2);
    assert.equal(-2, calculator.runningTotal);
  })

  it('can multiply from running total', function(){
    calculator.previousTotal = 1;
    calculator.multiply(5);
    assert.equal(5, calculator.runningTotal);
  })

  it('number click changes new Total boolean', function(){
    calculator.numberClick(2);
    assert.equal(false, calculator.newTotal);
  })

  it('can divide from running total', function(){
    calculator.previousTotal = 10;
    calculator.divide(2);
    assert.equal(5, calculator.runningTotal);
  })

  it('can use operatorClick to add', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  })

  it('can use operatorClick to subtract', function(){
    calculator.numberClick(10);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  })

  it('can multiply 3x5 and get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal);
  })

  it('can divide 21/7 and get 3', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  })

  it('can add 1+4 and get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  })

  it('can subtract 7-4 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  })

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    assert.equal(60, calculator.runningTotal);
  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(8);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal);
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('-');
    calculator.numberClick(8);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })


  

  

  

  


});
