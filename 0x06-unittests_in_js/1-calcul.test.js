const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber type == SUM', function() {
	it('calculateSUM', function() {
		assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
		assert.equal(calculateNumber('SUM', 1, 3.7), 5);
		assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
		assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
	});
	it("calculateNegativeNumber", function() {
		assert.equal(calculateNumber('SUM', -1, 4), 3);
		assert.equal(calculateNumber('SUM', 1, -3.7), -3);
		assert.equal(calculateNumber('SUM', -1.2, 3.7), 3);
		assert.equal(calculateNumber('SUM', 1.5, -3.7), -2);
	});
	it("checks for round", function() {
		assert.equal(calculateNumber('SUM', 0, -4.2), -4);
                assert.equal(calculateNumber('SUM', 1.2, 0), 1);
                assert.equal(calculateNumber('SUM', 0, 3.7), 4);
                assert.equal(calculateNumber('SUM', 1.5, 0), 2);
	});
});

describe('calculateNumber type == SUBSTRACT', function() {
        it('calculateSUB', function() {
                assert.equal(calculateNumber('SUBSTRACT', 1.4, 4.5), -4);
                assert.equal(calculateNumber('SUBSTRACT', 1, 3.7), -3);
                assert.equal(calculateNumber('SUBSTRACT', 1.2, 3.7), -3);
                assert.equal(calculateNumber('SUBSTRACT', 1.5, 3.7), -2);
        });
        it("calculateNegativeNumber", function() {
                assert.equal(calculateNumber('SUBSTRACT', -1, 4), -5);
                assert.equal(calculateNumber('SUBSTRACT', 1, -3.7), 5);
                assert.equal(calculateNumber('SUBSTRACT', -1.2, 3.7), -5);
                assert.equal(calculateNumber('SUBSTRACT', 1.5, -3.7), 6);
        });
});
describe('calculateNumber type == DIVIDE', () => {
        it('check the output', () => {
                assert.strictEqual(calculateNumber('DIVIDE', 2, 2.5), 0.6666666666666666);
                assert.strictEqual(calculateNumber('DIVIDE', 0.0, 2), 0);
                assert.strictEqual(calculateNumber('DIVIDE', -1, 1), -1);
                assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
        });
});
