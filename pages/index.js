import React from 'react';
import { highlight } from 'highlight.js'

import FunctionRow from '../components/endpointRow';
import SimpleCard from '../components/simpleCard';
import data from '../data.js'

const steps = data['abi'];

class DocumentationCtrl extends React.Component {
  constructor() {
    super();

    this.state = {
      stepIndex: 0,
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.renderEndpoints = this.renderEndpoints.bind(this);

  }

  clickHandler(i) {
    this.setState({ fadeOut: true });
    setTimeout(() => {
      this.setState({ stepIndex: i, fadeOut: false });
    }, 150);
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
const api = require('api').config('demo_j2k3jklz');

api('${steps[this.state.stepIndex].name}').run('send', {
  to: '+1514-651-4227',
  message: 'Your package has been delivered!'
}, (err, response) => {
  console.log(response);
});
    `;

    const codeSample = (
      <div className="code-highlighting">
        <pre onCopy={this.onCopy}>
          <code className={`hljs lang-javascript`}
            dangerouslySetInnerHTML={{ __html: highlight('javascript', code).value}
          }
          />
        </pre>

        <style>
          {`
            .code-highlighting {
              padding: 0px 10px;
            }
            pre {
              color: #b8bff2;
              background-color: #0a1a36;
              padding-top: 0px;
            }
          `}
        </style>
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
            fadeOut={this.state.fadeOut}
          />
        </div>
        <div className="col-xs-3 response-container">
          <SimpleCard>
            Responses;
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