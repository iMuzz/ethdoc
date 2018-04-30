import React from 'react';
import { highlight } from 'highlight.js';
import Web3 from 'web3';

import FunctionRow from '../components/endpointRow';
import SimpleCard from '../components/simpleCard';
import ErrorCard from '../components/errorCard';
import Runkit from '../components/runkit';
import FunctionContent from '../components/functionContent';
import Web3Container from '../lib/web3Container';
import data2 from '../data2';
import contractInformation from './test';

function parseFunctionName(name) {
  return name.split('(')[0];
}

let steps = data2.contracts['KittyOwnership.sol:KittyOwnership'].abi;
let contractAbi = data2.contracts['KittyOwnership.sol:KittyOwnership'].abi;
const devdoc = data2.contracts['KittyOwnership.sol:KittyOwnership'].devdoc;

const methodNames = Object.keys(devdoc.methods).map(parseFunctionName);

steps = contractAbi.map((meth) => {
  const methodDevdoc = getMethodDevdoc(meth.name, devdoc.methods);

  if (methodDevdoc) {
    meth.devdoc = methodDevdoc;
  }
  return meth;
}).filter(abi => abi.devdoc).filter(abi => abi.devdoc.details)

// console.log(steps);

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
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.renderEndpoints = this.renderEndpoints.bind(this);
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
    return steps.map((step, i) => {
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

    // let codeSample = (
    //   <div className="code-highlighting">
    //     <pre className="code-highlight">
    //       <code className={`hljs lang-javascript`}
    //         dangerouslySetInnerHTML={{ __html: highlight('javascript', code).value}
    //       }
    //       />
    //     </pre>

    //     <style>
    //       {`
    //         .code-highlight {
    //           color: #b8bff2;
    //           background-color: #0a1a36;
    //           padding-top: 0px;
    //         }
    //       `}
    //     </style>
    //     <button onClick={this.sendTransaction}>
    //       Run Code
    //       <style>
    //         {`
    //           button { 
    //             background-color: #4762ff;
    //             padding: 10px;
    //             border: none;
    //             color: white;
    //             border-radius: 3px;
    //             transition: all .3s;
    //             position: relative;
    //             top: 0px;
    //           }

    //           button:hover {
    //             background-color: #6078FF;
    //             padding: 10px;
    //             cursor: pointer;
    //             top: -1px;
    //           }
    //         `}
    //       </style>
    //     </button>
    //   </div>
    // );

     return (
      <div className="row doc-container around-xs">
        <div className="col-xs-2">
          { this.renderEndpoints() }
        </div>
        <div className="col-xs-6">
          <SimpleCard
            body={<div></div>}
            description={steps[this.state.stepIndex].devdoc.details}
            fadeOut={this.state.fadeOut}
          >
            <FunctionContent
              method={steps[this.state.stepIndex]}
            />
          </SimpleCard>
        </div>
        <div className="col-xs-4 response-container">
          <SimpleCard>
            <ErrorCard loading={this.state.isLoading} didRun={this.state.didRun} button={button} />
          </SimpleCard>
        </div>
        <style>
          {`
            .doc-container {
              padding: 50px 25px;
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
