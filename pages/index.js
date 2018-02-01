import React from 'react';
import { highlight } from 'highlight.js'
import Web3 from 'web3'

import FunctionRow from '../components/endpointRow';
import SimpleCard from '../components/simpleCard';
import ErrorCard from '../components/errorCard';
import data from '../data.js'

const steps = data['abi'];

class DocumentationCtrl extends React.Component {
  constructor() {
    super();

    this.state = {
      stepIndex: 0,
      isLoading: false,
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.renderEndpoints = this.renderEndpoints.bind(this);

  }

  componentDidMount() {
    const { web3 } = window;
    console.log({ web3 });
  }

  clickHandler(i) {
    this.setState({ fadeOut: true });
    setTimeout(() => {
      this.setState({ stepIndex: i, fadeOut: false });
    }, 150);
  }

  sendTransaction() {
    web3.eth.sendTransaction({from:'0x9b073D121AAF5e18BfbD8f17ed79728BBB30fc7e', to:'0xfbc07a051755823b10ca0cb9a14fb25d13a86791', value: 1}, (d) => {
      console.log(d);
    });
  }

  renderEndpoints() {
    return steps.map((step, i) => {
      return (
        <FunctionRow
          key={i}
          title={step.name}
          isActive={i === this.state.stepIndex}
          onClick={() => {this.clickHandler(i)}}
        />
      );
    }); 
  }

  render() {
    const code = `
import OwlCoinABI from './OwlCoinABI.json';

const OwlCoinContract = web3.eth.contract(OwlCoinABI);

const OwlCoin = OwlCoinContract.at('0x78570cf7E9db80D03A9A5B6A9..');

OwlCoin.${steps[this.state.stepIndex].name}().then(console.log)
    `;

    const codeSample = (
      <div className="code-highlighting">
        <pre className="code-highlight">
          <code className={`hljs lang-javascript`}
            dangerouslySetInnerHTML={{ __html: highlight('javascript', code).value}
          }
          />
        </pre>

        <style>
          {`
            .code-highlight {
              color: #b8bff2;
              background-color: #0a1a36;
              padding-top: 0px;
            }
          `}
        </style>
        <button onClick={this.sendTransaction}>
          Run Code
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
      </div>
    );
    return (
      <div className="row doc-container around-xs">
        <div className="col-xs-2">
          { this.renderEndpoints() }
        </div>
        <div className="col-xs-6">
          <SimpleCard
            content={steps[this.state.stepIndex].name}
            body={codeSample}
            description={steps[this.state.stepIndex].description}
            fadeOut={this.state.fadeOut}
          />
        </div>
        <div className="col-xs-4 response-container">
          <SimpleCard
          >
            <ErrorCard />
          </SimpleCard>
        </div>
        <style>
          {`
            .doc-container {
              padding: 50px 50px;
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

export default DocumentationCtrl;