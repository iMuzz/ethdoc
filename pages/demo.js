import React from 'react';
import Web3 from 'web3';
import NextLink from 'next/link';

import { Alert } from '@blueprintjs/core';
import EndpointRow from '../components/endpointRow';
import ErrorCard from '../components/errorCard';
import Footer from '../components/ui/footer';
import FunctionContent from '../components/functionContent';
import Runkit from '../components/runkit';
import SimpleCard from '../components/simpleCard';

import contractInformation from './test.js';
import steps from '../lib/hacks';
import Web3Container from '../lib/web3Container';

import InfiniteScroll from 'react-infinite-scroll-component';
import { Element, Link, scrollSpy } from 'react-scroll';

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

	componentDidMount() {
		scrollSpy.update();
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
						to={`${step.name}`}
						spy={true}
						hashSpy={true}
						smooth={true}
						onSetActive={() => {
							this.setState({ active: step.name });
						}}>
						<EndpointRow
							key={i}
							title={step.name}
							isActive={step.name == this.state.active}
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
				<Element name={`${step.name}`}>
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
						onClose={() => this.setState({ alert: false })}
						confirmButtonText="Hide"
						transitionDuration={200}>
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
				<Footer />
				<style>
					{`
            html {
              margin-bottom: 15%;
            }

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
							margin-bottom: 5em;
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
		renderLoading={() => <div />}
		render={props => <DocumentationCtrl {...props} />}
	/>
);
