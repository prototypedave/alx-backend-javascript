const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', function () {
	const utilSpy = sinon.spy(Utils, 'calculateNumber');

	it('validate the usage of the Utils function', function() {
                sendPaymentRequestToApi(100, 20);
                chai.expect(utilSpy.calledOnce).to.be.true;
                chai.expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
                utilSpy.restore()
 
	});
});
