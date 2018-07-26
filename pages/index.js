import React from 'react';
import Web3 from 'web3';
// import Link from 'next/link'

import FunctionRow from '../components/endpointRow';
import SimpleCard from '../components/simpleCard';
import ErrorCard from '../components/errorCard';
import Runkit from '../components/runkit';
import FunctionContent from '../components/functionContent';
import Web3Container from '../lib/web3Container';
import steps from '../lib/hacks';
import contractInformation from './test.js';

// TESTING
import InfiniteScroll from 'react-infinite-scroll-component';
import { Element, Link, scrollSpy } from 'react-scroll';


class DocumentationCtrl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0,
      didRun: false,
      steps: steps,
      active: 0,
      connected: this.props.connected,
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.renderEndpoints = this.renderEndpoints.bind(this);
    this.updateMethod = this.updateMethod.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
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
        <div onClick={() => { this.clickHandler(i); }}>
          <Link to={`${i}`} spy={true} smooth={true} onSetActive={() => { this.setState({ active: i})}} >
            <FunctionRow
              key={i}
              title={step.name}
              isActive={i === this.state.active}
            />
          </Link>
        </div>
      );
    });
  }

  getItems() {
    return this.state.steps.map((step, i) => {
      return (
        <Element name={`${i}`}>
          <SimpleCard
            body={<div></div>}
            description={this.state.steps[i].devdoc.details}
            fadeOut={this.state.fadeOut}
          >
            <FunctionContent
              method={steps[i]}
              updateMethod={this.updateMethod}
              web3={this.props.web3}
              contractAddress={contractInformation.contractAddress}
              contractAbi={contractInformation.contractAbi}
            />
          </SimpleCard>
        </Element>
      )
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
        <div className="col-xs-3 sidebar-container sticky-top">
          { this.renderEndpoints() }
        </div>
        <div className="col-xs-9 content-container">
          <InfiniteScroll
            dataLength={this.state.steps.length}
            hasMore={false}
          >
            {this.getItems()}
          </InfiniteScroll>
        </div>

        <style>
          {`
            .sidebar-container {
              top: 50px;
              left: 20px;
              position: sticky;
            }
            .content-container {
              height: 100%;
              margin-bottom: 25%;
            }
            .doc-container {
              padding: 50px 10px;
              position: relative;
              max-width: 1200px;
              margin: auto;
              display: flex;
              align-items: flex-start
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

export default () => (
  <Web3Container
    renderLoading={() => <div></div>}
    render={(props) => (
      <DocumentationCtrl {...props} />
    )}
  />
)
