import React from 'react';

import FunctionRow from '../components/endpointRow';
import SimpleCard from '../components/simpleCard';

const steps = [
  {
    content: 'Endpoint 1'
  },
  {
    content: 'Endpoint 2'
  },
  {
    content: 'Endpoint 3'
  },
]

class DocumentationCtrl extends React.Component {
  constructor() {
    super();

    this.state = {
      stepIndex: 0,
    }

    this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler(i) {
    this.setState({ fadeOut: true });
    setTimeout(() => {
      this.setState({ stepIndex: i, fadeOut: false });
    }, 150);
  }

  render() {
    return (
      <div className="row doc-container around-xs">
        <div className="col-xs-2">
          <FunctionRow onClick={() => {this.clickHandler(0)}} />
          <FunctionRow onClick={() => {this.clickHandler(1)}} />
          <FunctionRow onClick={() => {this.clickHandler(2)}} />
        </div>
        <div className="col-xs-6">
          <SimpleCard
            content={steps[this.state.stepIndex].content}
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