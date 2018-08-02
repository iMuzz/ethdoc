import React from 'react';
import Web3 from 'web3';
// import Link from 'next/link'

import EndpointRow from '../components/endpointRow';
import ErrorCard from '../components/errorCard';
import FunctionContent from '../components/functionContent';
import Runkit from '../components/runkit';
import steps from '../lib/hacks';
import SimpleCard from '../components/simpleCard';
import Web3Container from '../lib/web3Container';
import contractInformation from './test.js';

// Implement scrolling list of endpoints.
import InfiniteScroll from 'react-infinite-scroll-component';
import { Element, Link } from 'react-scroll';

// Display modal if web3 connection is not found.
import { Alert } from '@blueprintjs/core';

class DocumentationCtrl extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0,
			alert: false,
			connected: this.props.connected,
			didRun: false,
			stepIndex: 0,
			steps: steps
		};

		this.handleAlert = this.handleAlert.bind(this);
		this.renderCards = this.renderCards.bind(this);
		this.renderEndpoints = this.renderEndpoints.bind(this);
		this.updateMethod = this.updateMethod.bind(this);
	}

	// Show or hide alert.
	handleAlert(status) {
		this.setState({ alert: status });
	}

	// Renders list of endpoints.
	renderEndpoints() {
		return this.state.steps.map((step, i) => {
			return (
				<div>
					<Link
						to={`${i}`}
						spy={true}
						smooth={true}
						onClick={() => {
							this.setState({ active: i });
						}}>
						<EndpointRow
							key={i}
							title={step.name}
							isActive={i === this.state.active}
						/>
					</Link>
				</div>
			);
		});
	}

	// Generates cards for each endpoint
	renderCards() {
		return this.state.steps.map((step, i) => {
			return (
				<Element name={`${i}`}>
					<SimpleCard
						body={<div />}
						description={this.state.steps[i].devdoc.details}
						fadeOut={this.state.fadeOut}>
						<FunctionContent
							connected={this.state.connected}
							handleAlert={this.handleAlert}
							method={steps[i]}
							updateMethod={this.updateMethod}
							web3={this.props.web3}
							contractAddress={contractInformation.contractAddress}
							contractAbi={contractInformation.contractAbi}
						/>
					</SimpleCard>
				</Element>
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
				<div className="col-xs-3 sidebar-container sticky-top">
					{this.renderEndpoints()}
				</div>
				<div className="col-xs-9 content-container">
					<Alert
						isOpen={this.state.alert}
						onConfirm={() => this.setState({ alert: false })}
						confirmButtonText="Hide">
						<div className="alert-text">
							Please check your <code>web3</code> connection. If you don't have
							a <code>web3</code> client installed, try using
							<a href="https://metamask.io/"> Metamask</a>.
						</div>
					</Alert>
					<InfiniteScroll dataLength={this.state.steps.length} hasMore={false}>
						{this.renderCards()}
					</InfiniteScroll>
				</div>
				<div className="footer mtop pbot">
	        <p className="align-middle">made with ❤️by <a target="_blank" href="https://twitter.com/@faraaznishtar">@faraaznishtar</a> and <a target="_blank" href="https://twitter.com/@achalvs">@achalvs</a></p>
	      </div>

				<style>
					{`
						a {
							color: rgba(71, 98, 255, 1) !important;
						}

						.alert-text {
							line-height: 1.5em !important;
						}

            .sidebar-container {
              top: 50px;
              left: 20px;
              position: sticky;
            }

            .content-container {
              height: 100%;
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

						.footer {
							font-family: Titillium Web;
						}

						.align-middle {
							text-align: center;
						}
          `}
				</style>
			</div>
		);
	}
}

export default () => (
	<Web3Container
		renderLoading={() => <div />}
		render={props => <DocumentationCtrl {...props} />}
	/>
);
