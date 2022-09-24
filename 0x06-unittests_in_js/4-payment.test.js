const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', function () {
	const spyConsole = sinon.spy(console, 'log');

	it('validate the usage of the Utils function', function() {
		const utilStub = sinon.stub(Utils, 'calculateNumber')
		utilStub.withArgs('SUM', 100, 20).returns(10);
                sendPaymentRequestToApi(100, 20);
                chai.expect(spyConsole.calledOnce).to.be.true;
                chai.expect(spyConsole.calledWith('SUM', 100, 20)).to.be.true;
                utilStub.restore()
                spyConsole.restore(); 
	});
});
