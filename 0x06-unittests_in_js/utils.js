const Utils = {
	calculateNumber(type, a, b) {
                if(type === "SUM"){
                        const sum = Math.round(b) + Math.round(a);
                        return sum;
                } else if(type === "SUBTRACT"){
                        const substract = (Math.round(a)) - (Math.round(b));
                        return substract;
                } else if(type === "DIVIDE")
                        if(Math.round(b) === 0) return 'Error';
                        const divide = Math.round(a) / Math.round(b)
                        return divide;

	},
};

module.exports = Utils;
