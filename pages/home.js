import Button from '../components/ui/button';
import Laptop from '../components/laptop';
import Editor from '../components/svg/editor.svg';
import Terminal from '../components/svg/iterm.svg';
import Logo from '../components/svg/logo-dark.svg';
import Footer from '../components/footer';
import Window from '../components/svg/window.svg';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div className="home">
					<div className="container">
						<div className="row center">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 intro">
								<div className="logo">
									<Logo />
								</div>
								Create documentation for your smart contracts in a matter of
								<strong> seconds</strong>.
								<div className="block-rtl demo">
									<Button className="demo">View Demo</Button>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<Laptop />
							</div>
						</div>
						<div className="row center">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 image left">
								<Editor className="editor" />
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<div className="step-content right">
									<h1 className="step-header">📚 Document your code.</h1>
									<p className="step-text">
										Use the <a>Ethereum Natural Specification</a> form to write
										comments in your files.
									</p>
								</div>
							</div>
						</div>
						<div className="row center">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<div className="step-content left">
									<h1 className="step-header">⚡️ Generate using CLI.</h1>
									<p className="step-text">
										Use the command line interface to create docs with just a
										couple commands.
									</p>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 image right">
								<Terminal className="terminal" />
							</div>
						</div>
						<div className="row center">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 image left">
								<Window className="browser" />
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<div className="step-content right">
									<h1 className="step-header">🎉 Voila! You're done.</h1>
									<p className="step-text">
										You just automatically generated a UI for your smart
										contract.
									</p>
								</div>
							</div>
						</div>
					</div>
					<style jsx>
						{`
							html,
							body {
								background: #fff !important;
								font-family: Titillium Web;
							}

							// LINK STYLING

							a {
								color: #6078ff;
								transition: color 0.2s;
							}

							a:hover {
								color: #8595ef;
								text-decoration: none;
							}

							// CUSTOM SPACING



							// ALIGNMENT

							.align-middle {
								text-align: center;
							}

							.align-left {
								text-align: left;
								justify-content: flex-start;
							}

							.align-right {
								text-align: right;
								justify-content: flex-end;
							}

							.row.center {
								justify-content: center;
								align-items: center;
							}

							.block-rtl {
                display: flex;
                justify-content: flex-end;
                text-align: right;
							}

							.block-ltr {
								align-self: flex-start;
                text-align: left;
							}

							// STYLING ELEMENTS

              .container {
                padding-bottom: 5em;
              }

							.home {
								background-color: white;
								margin: 5% 5% 4% 5%;
								border-radius: 10px;
								box-shadow: 0px 2px 15px #e6e6e6;
							}

							.intro {
								font-family: 'Titillium Web';
								font-style: normal;
								font-weight: normal;
								line-height: normal;
								font-size: 2em;
								text-align: right;
								max-width: 400px;
							}

              .demo {
                margin-top: 0.75em;
              }

							.image {
								max-width: 50%;
                display: flex;
                justify-content: center;
							}

              .image.left {
                justify-content: flex-end;
              }

              .image.right {
                justify-content: flex-start;
              }

							.terminal {
								filter: none;
								max-width: 450px;
							}

							.editor {
                max-width: 450px;
							}

              .browser {
                height: 75%;
                width: 75%;
                border-radius: 6px;
                border: 1px solid #e8e8e8;
                margin-top: 5em;
              }

							// STEP LAYOUTS

							.step {
								font-family: Titillium Web !important;
								max-width: 600px;
								display: flex;
							}

							.step-content {
								position: relative;
							}

              .step-content.left {
                text-align: right;
                padding: 0em 3em 0em 8em;
              }

              .step-content.right {
                text-align: left;
                padding: 0em 8em 0em 3em;
              }

							.step-header {
								margin-top: 1rem;
								font-size: 2.2rem;
								line-height: 2.5rem;
							}

							.step-text {
								font-size: 1.1rem;
								font-weight: 300;
								line-height: 1.6rem;
							}

							// RESPONSIVE QUERIES

							@media (max-width: 800px) {
								.homepage {
									display: block;
								}
							}
						`}
					</style>
				</div>
				<Footer />
			</>
		);
	}
}

export default HomePage;
