import React from 'react';
import getWeb3 from './getWeb3';

export default class Web3Container extends React.Component {
  state = { web3: null }

  async componentDidMount () {
    try {
      const web3 = await getWeb3()
      this.setState({ web3 })
    } catch (error) {
      alert(`Failed to load web3. Check console for details.`)
      console.log(error)
    }
  }

  render () {
    const { web3 } = this.state
    return web3
      ? this.props.render({ web3 })
      : this.props.renderLoading()
  }
}