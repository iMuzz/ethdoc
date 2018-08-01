const generateCodeSample = ({
	contractName,
	contractAddress = '0x5049152044B3b4dAbA58479B6fF54346f8e60EAe',
	method
}) => {
	const methodName = method.name;

	let codeSample = `
const web3 = require('web3');

const ${contractName} = new web3.eth.Contract(contractAbi, contractAddress);
`;

	method.inputs.forEach(input => {
		codeSample += createArgumentConstant(input);
	});

	codeSample += `
${contractName}.methods.${methodName}(${findArguments(
		method.inputs
	)}).call().then((res) => {
  console.log(res);
});
`;

	return codeSample;
};

const createArgumentConstant = arg => {
	return `const ${arg.name} = ${arg.value}; \n`;
};

const findArguments = inputs => {
	return inputs.map((input, i) => {
		if (i === 0) return input.name;
		return ` ${input.name}`;
	});
};

export default generateCodeSample;
