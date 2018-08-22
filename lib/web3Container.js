import React from 'react';
import getWeb3 from './getWeb3';

export default class Web3Container extends React.Component {
	state = {
		web3: null,
		connected: false
	};

	async componentDidMount() {
		try {
			const web3 = await getWeb3();
			// TODO: There is an issue with Web3 npm install so I had to add this.
			web3._provider = {};
			this.setState({
				web3,
				connected: web3._provider.connected === false ? false : true
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { web3, connected } = this.state;
		return web3
			? this.props.render({ web3, connected })
			: this.props.renderLoading();
	}
}
