const calculateNumber = function calculateNumber(a, b, type) {
	if(type === "SUM"){
		const sum = Math.round(b) + Math.round(a);
		return sum;
	} else if(type === "SUBTRACT"){
		const substract = Math.round(a) - Math.round(b);
		return substract;
	} else if(type === "DIVIDE")
		const A = Math.round(a);
	        const B = Math.round(b);
	        if(B == 0){
			return error;
		} else
		const divide = A / B;
	        return divide;
};

module.exports = calculateNumber;
