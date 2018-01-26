import React from 'react';

import EndpointRow from '../components/endpointRow';
import SimpleCard from '../components/simpleCard';

class DocumentationCtrl extends React.Component {
  constructor() {
    super();

    this.state = {
      stepIndex: 0,
    }

    this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler() {
    console.log('The click has happened!');
  }

  render() {
    return (
      <div className="row doc-container">
        <div className="col-xs-2">
          <EndpointRow onClick={this.clickHandler} />
          <EndpointRow onClick={this.clickHandler} />
          <EndpointRow onClick={this.clickHandler} />
        </div>
        <div className="col-xs-6">
          <SimpleCard>
            <div> Welcome to next.js! </div>
          </SimpleCard>
        </div>
        <div className="col-xs-4 response-container">
          Code responseses!
        </div>
        <style>
          {`
            .doc-container { padding: 50px 20px }
            .response-container {
              height: 100vh
            }
          `}

        </style>
      </div>
    );
  }
}

export default DocumentationCtrl;