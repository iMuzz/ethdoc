import React from 'react';
import Web3 from 'web3';

import FunctionRow from '../components/endpointRow';
import SimpleCard from '../components/simpleCard';
import ErrorCard from '../components/errorCard';
import Runkit from '../components/runkit';
import FunctionContent from '../components/functionContent';
import Web3Container from '../lib/web3Container';
import steps from '../lib/hacks';
import contractInformation from './test.js';

class DocumentationCtrl extends React.Component {
  constructor() {
    super();

    this.state = {
      stepIndex: 0,
      didRun: false,
      steps: steps,
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.renderEndpoints = this.renderEndpoints.bind(this);
    this.updateMethod = this.updateMethod.bind(this);
  }

  clickHandler(i) {
    this.setState({ fadeOut: true });
    setTimeout(() => {
      this.setState({ stepIndex: i, fadeOut: false });
    }, 150);
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
     return (
      <div className="row doc-container around-xs">
        <div className="col-xs-3 sidebar-container">
          { this.renderEndpoints() }
        </div>
        <div className="col-xs-9">
          <SimpleCard
            body={<div></div>}
            description={steps[this.state.stepIndex].devdoc.details}
            fadeOut={this.state.fadeOut}
          >
            <FunctionContent
              method={steps[this.state.stepIndex]}
              updateMethod={this.updateMethod}
              web3={this.props.web3}
              contractAddress={contractInformation.contractAddress}
              contractAbi={contractInformation.contractAbi}
            />
          </SimpleCard>
        </div>

        <style>
          {`
            .sidebar-container {
              position: fixed;
              top: 50px;
              left: 20px;
            }
            .doc-container {
              padding: 50px 150px;
              overflow: hidden;
              position: relative;
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
    renderLoading={() => <div></div>}
    render={(props) => (
      <DocumentationCtrl {...props} />
    )}
  />
)
