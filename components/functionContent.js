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
		const ContractInstance = new web3.eth.Contract(
			contractAbi,
			contractAddress
		);
		const methodName = this.props.method.name;
		const isConstant = this.props.method.constant;
		const args = this.props.method.inputs
			.map(i => i.value)
			.filter(i => i !== undefined);

		web3.eth.getAccounts().then(account => {
			let prom;

			if (isConstant) {
				prom = ContractInstance.methods[methodName](...args).call({
					from: account[0]
				});
			} else {
				prom = ContractInstance.methods[methodName](...args)
					.send({
						from: account[0]
					})
					.on('transactionHash', hash => {
						cb({ isTransaction: true, transactionHash: hash });
					});
			}

			prom.then(res => {
				cb({ answer: res });
			});

			return prom;
		});
	}

	render() {
		const { method, connected, handleAlert } = this.props;

		return (
			<div>
				<FunctionTitle name={method.name} inputs={method.inputs} />
				<div className="content-padding">
					<FunctionDescription details={method.devdoc.details} />

					<FunctionParamTable
						inputs={method.inputs}
						params={method.devdoc.params}
						updateMethod={this.props.updateMethod}
					/>

					<Runkit
						connected={connected}
						cta={this.sendTransaction}
						handleAlert={handleAlert}
						method={method}
					/>

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
