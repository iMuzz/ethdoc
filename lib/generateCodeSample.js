const generateCodeSample = ({ contractName, contractAddress='0x5049152044B3b4dAbA58479B6fF54346f8e60EAe', methodName }) => {
  return `
const web3 = require('web3');

const ${contractName}Instance = new web3.eth.Contract(contractAbi, contractAddress);
${contractName}Instance.methods.${methodName}("0x5049152044B3b4dAbA58479B6fF54346f8e60EAe").call().then((res) => {
  console.log(res);
});
`;
}

export default generateCodeSample;