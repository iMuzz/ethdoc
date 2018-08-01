import data2 from '../pages/0x.js';

function parseFunctionName(name) {
	return name.split('(')[0];
}

const contractFileName = 'TokenRegistry.sol:TokenRegistry';
const contractAbi = JSON.parse(data2.contracts[contractFileName].abi);
const devdoc = JSON.parse(data2.contracts[contractFileName].devdoc);

const methodNames = Object.keys(devdoc.methods).map(parseFunctionName);

const steps = contractAbi
	.map(meth => {
		const methodDevdoc = getMethodDevdoc(meth.name, devdoc.methods);

		if (methodDevdoc) {
			meth.devdoc = methodDevdoc;
		}
		return meth;
	})
	.filter(abi => abi.devdoc)
	.filter(abi => abi.devdoc.details);

function getMethodDevdoc(methodName, devDocMethods) {
	let answer;

	Object.keys(devDocMethods).forEach(key => {
		if (parseFunctionName(key) === methodName) {
			// console.log(`key: ${key}, methodName: ${methodName}`, devDocMethods[key]);
			answer = devDocMethods[key];
		}
	});

	return answer;
}

export default steps;
