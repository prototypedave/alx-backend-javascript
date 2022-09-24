const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber type == SUM', function() {
	it('calculateSUM', function() {
		chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		chai.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
		chai.expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
		chai.expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
	});
	it("calculateNegativeNumber", function() {
		chai.expect(calculateNumber('SUM', -1, 4)).to.equal( 3);
		chai.expect(calculateNumber('SUM', 1, -3.7)).to.equal(-3);
		chai.expect(calculateNumber('SUM', -1.2, 3.7)).to.equal(3);
		chai.expect(calculateNumber('SUM', 1.5, -3.7)).to.equal(-2);
	});
	it("checks for round", function() {
		chai.expect(calculateNumber('SUM', 0, -4.2)).to.equal(-4);
                chai.expect(calculateNumber('SUM', 1.2, 0)).to.equal(1);
                chai.expect(calculateNumber('SUM', 0, 3.7)).to.equal(4);
                chai.expect(calculateNumber('SUM', 1.5, 0)).to.equal(2);
	});
});

describe('calculateNumber type == SUBSTRACT', function() {
        it('calculateSUB', function() {
                chai.expect(calculateNumber('SUBSTRACT', 1.4, 4.5)).to.equal(-4);
                chai.expect(calculateNumber('SUBSTRACT', 1, 3.7)).to.equal(-3);
                chai.expect(calculateNumber('SUBSTRACT', 1.2, 3.7)).to.equal(-3);
                chai.expect(calculateNumber('SUBSTRACT', 1.5, 3.7)).to.equal(-2);
        });
        it("calculateNegativeNumber", function() {
                chai.expect(calculateNumber('SUBSTRACT', -1, 4)).to.equal(-5);
                chai.expect(calculateNumber('SUBSTRACT', 1, -3.7)).to.equal(5);
                chai.expect(calculateNumber('SUBSTRACT', -1.2, 3.7)).to.equal(-5);
                chai.expect(calculateNumber('SUBSTRACT', 1.5, -3.7)).to.equal(6);
        });
});
describe('calculateNumber type == DIVIDE', () => {
        it('check the output', () => {
                chai.expect(calculateNumber('DIVIDE', 2, 2.5)).to.equal(0.6666666666666666);
                chai.expect(calculateNumber('DIVIDE', 0.0, 2)).to.equal(0);
                chai.expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
                chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
});
