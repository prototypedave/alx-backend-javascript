const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
	it('calculateNumber', function() {
		assert.equal(calculateNumber(1, 3), 4);
		assert.equal(calculateNumber(1, 3.7), 5);
		assert.equal(calculateNumber(1.2, 3.7), 5);
		assert.equal(calculateNumber(1.5, 3.7), 6);
	});
	it("calculateNegativeNumber", function() {
		assert.equal(calculateNumber(-1, 4), 3);
		assert.equal(calculateNumber(1, -3.7), -3);
		assert.equal(calculateNumber(-1.2, 3.7), 3);
		assert.equal(calculateNumber(1.5, -3.7), -2);
	});
	it("checks for round", function() {
		assert.equal(calculateNumber(0, -4.2), -4);
                assert.equal(calculateNumber(1.2, 0), 1);
                assert.equal(calculateNumber(0, 3.7), 4);
                assert.equal(calculateNumber(1.5, 0), 2);
	});
});
