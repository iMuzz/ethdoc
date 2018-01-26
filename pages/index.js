import React from 'react';

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
    return (
      <div className="row doc-container around-xs">
        <div className="col-xs-2">
          { this.renderEndpoints() }
        </div>
        <div className="col-xs-6">
          <SimpleCard
            content={steps[this.state.stepIndex].name}
            fadeOut={this.state.fadeOut}
          />
        </div>
        <div className="col-xs-3 response-container">
          <SimpleCard>
            Code responseses!
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
          `}

        </style>
      </div>
    );
  }
}

export default DocumentationCtrl;