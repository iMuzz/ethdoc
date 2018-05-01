import React from 'react';
import Web3 from 'web3';

import FunctionRow from '../components/endpointRow';
import SimpleCard from '../components/simpleCard';
import ErrorCard from '../components/errorCard';
import Runkit from '../components/runkit';
import FunctionContent from '../components/functionContent';
import Web3Container from '../lib/web3Container';
// import data2 from '../data2.js';
import data2 from './0x.js';
import contractInformation from './test';

function parseFunctionName(name) {
  return name.split('(')[0];
}

contractFileName = 'Exchange.sol:Exchange';

const contractAbi = JSON.parse(data2.contracts[contractFileName].abi);
const devdoc = JSON.parse(data2.contracts[contractFileName].devdoc);

const methodNames = Object.keys(devdoc.methods).map(parseFunctionName);

const steps = contractAbi.map((meth) => {
  const methodDevdoc = getMethodDevdoc(meth.name, devdoc.methods);

  if (methodDevdoc) {
    meth.devdoc = methodDevdoc;
  }
  return meth;
}).filter(abi => abi.devdoc).filter(abi => abi.devdoc.details)


function getMethodDevdoc(methodName, devDocMethods) {
  let answer;

  Object.keys(devDocMethods).forEach((key) => {
    if (parseFunctionName(key) === methodName) {
      // console.log(`key: ${key}, methodName: ${methodName}`, devDocMethods[key]);
      answer = devDocMethods[key];
    }
  });

  return answer;
  }

class DocumentationCtrl extends React.Component {
  constructor() {
    super();

    this.state = {
      stepIndex: 0,
      isLoading: false,
      didRun: false,
      steps: steps,
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.renderEndpoints = this.renderEndpoints.bind(this);
    this.updateMethod = this.updateMethod.bind(this);
    this.sendTransaction = this.sendTransaction.bind(this);
  }

  clickHandler(i) {
    this.setState({ fadeOut: true });
    setTimeout(() => {
      this.setState({ stepIndex: i, fadeOut: false });
    }, 150);
  }

  sendTransaction() {
    const { contractAbi, contractAddress } = contractInformation;
    const { web3 } = this.props;
    this.setState({ isLoading: true });
    const ZeroXContract = new web3.eth.Contract(contractAbi, contractAddress);
    ZeroXContract.methods.balanceOf("0x5049152044B3b4dAbA58479B6fF54346f8e60EAe").call().then((t) => {
      console.log("balance Acquired!");
      console.log(t)
      this.setState({ isLoading: false });
    })
  }

  renderEndpoints() {
    return this.state.steps.map((step, i) => {
      return (
        <FunctionRow
          key={i}
          title={step.name}
          isActive={i === this.state.stepIndex}
          onClick={() => { this.clickHandler(i); }}
        />
      );
    });
  }

  updateMethod(method) {
    const currStep = this.state.steps[this.state.stepIndex];

    // This is really hacky. But it works for now!
    const copy = JSON.parse(JSON.stringify(this.state.steps));

    this.setState({ steps: copy });
  }

  render() {
    const button = (
      <button onClick={this.sendTransaction}>
          Try It Now
          <style>
            {`
              button { 
                background-color: #4762ff;
                padding: 10px;
                border: none;
                color: white;
                border-radius: 3px;
                transition: all .3s;
                position: relative;
                top: 0px;
              }

              button:hover {
                background-color: #6078FF;
                padding: 10px;
                cursor: pointer;
                top: -1px;
              }
            `}
          </style>
        </button>
      );
     return (
      <div className="row doc-container around-xs">
        <div className="col-xs-2">
          { this.renderEndpoints() }
        </div>
        <div className="col-xs">
          <SimpleCard
            body={<div></div>}
            description={steps[this.state.stepIndex].devdoc.details}
            fadeOut={this.state.fadeOut}
          >
            <FunctionContent
              method={steps[this.state.stepIndex]}
              updateMethod={this.updateMethod}
            />
          </SimpleCard>
        </div>

        <style>
          {`
            .doc-container {
              padding: 50px 150px;
              overflow: hidden;
            }
            .response-container {
              height: 80vh
            }
            .hljs-keyword, .hljs-selector-tag {
              color: #3296d3
            }
            .hljs-number {
              color: #fa755a
            }
            .hljs-built_in, .hljs-builtin-name, .hljs-literal, .hljs-type, .hljs-params, .hljs-meta, .hljs-link {
              color: #e39f48
            }
            .hljs-string, .hljs-symbol, .hljs-bullet, .hljs-addition {
              color: #20b57e
            }
          `}

        </style>
      </div>
    );
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading...</div>}
    render={(props) => (
      <DocumentationCtrl {...props} />
    )}
  />
)
