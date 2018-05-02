import PropTypes from 'prop-types';
import FunctionTitle from './functionTitle';
import FunctionParamTable from './functionParamTable';
import FunctionDescription from './functionDescription';
import Runkit from './runkit';

class FunctionContent extends React.Component {
  constructor(props) {
    super(props);
    this.sendTransaction = this.sendTransaction.bind(this);
  }

  sendTransaction(cb) {
    const { web3, contractAbi, contractAddress } = this.props;
    const ContractInstance = new web3.eth.Contract(contractAbi, contractAddress);

    const methodName = this.props.method.name;
    const args = this.props.method.inputs.map(i => i.value);
    const invokeTransaction = isConstant ? 'call' : 'send';
    const isConstant = this.props.method.constant;

    // const _token = "0xa5C7EdCa55aE70C315ea9Bd14f881ed84C6CFd42"; 
    // const _name = "Faraaz Token"; 
    // const _symbol = "FFF"; 
    // const _decimals = 0; 
    // const _ipfsHash = web3.utils.asciiToHex("random");
    // const _swarmHash = web3.utils.asciiToHex("random");

    web3.eth.getAccounts().then((account) => {
      return ContractInstance.methods[methodName](...args)[invokeTransaction]({
        from: account[0],
      }).then((res) => {
        cb(res);
      });
    });
  }

  render() {
    const { method } = this.props;
    console.log(this.props)

    return (
      <div>
        <FunctionTitle
          name={method.name}
          inputs={method.inputs}
        />
        <div className="content-padding">
          <FunctionDescription details={method.devdoc.details}/>

          <FunctionParamTable
            inputs={method.inputs}
            params={method.devdoc.params}
            updateMethod={this.props.updateMethod}
          />

          <Runkit method={method} cta={this.sendTransaction}/>

          <style>{`
            .content-padding {
              padding: 25px;
            }
          `}</style>
        </div>
      </div>
    );
  }
}

FunctionContent.propTypes = {
  name: PropTypes.string
};


export default FunctionContent;