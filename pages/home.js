import Button from '../components/ui/button';
import Laptop from '../components/laptop';
import Editor from '../components/svg/editor.svg';
import Terminal from '../components/svg/iterm.svg';
import Logo from '../components/svg/logo.svg';
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
        <div className="container pbot">
          <div className="row">

            <div className="col-xs-12 col-md-5 intro">
              <div className="logo">
                <Logo />
              </div>
              Create documentation for your smart contracts in a matter of
              <strong> seconds</strong>.
              <div className="block-rtl">
                <Button className="demo">View Demo</Button>
              </div>
            </div>
            <div className="col-xs-12 col-md-7">
              <Laptop />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4 block-rtl image">
              <Editor className="editor" />
            </div>
            <div className="col-xs-12 col-md-8 step align-left">
              <div className="step-wrapper padding-left">
                <div className="step-content">
                  <h1 className="step-header">📚 Document your code.</h1>
                  <p className="step-text">Use the <a>Ethereum Natural Specification</a> form to write comments in your files.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mtop">
            <div className="col-xs-12 col-md-6 step align-right">
              <div className="step-wrapper padding-right">
                <div className="step-content">
                  <h1 className="step-header">⚡️ Generate using CLI.</h1>
                  <p className="step-text">Use the command line interface to create docs with just a couple commands.</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 image">
              <Terminal className="terminal" />
            </div>
          </div>
          <div className="row mtop">
            <div className="col-xs-12 col-md-4 block-rtl image">
              <Window className="browser" />
            </div>
            <div className="col-xs-12 col-md-8 step align-left">
              <div className="step-wrapper padding-left">
                <div className="step-content">
                  <h1 className="step-header">🎉 Voila! You're done.</h1>
                  <p className="step-text">You just automatically generated a UI for your smart contract.</p>
                </div>
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

            a {
              color: #6078FF;
              transition: color 0.2s;
            }

            a:hover {
              color: #8595ef;
              text-decoration: none;
            }

            .footer {
              font-family: Titillium Web;
            }

            .mtop {
              margin-top: 2em;
            }

            .pbot {
              padding-bottom: 7%;
            }

            .align-middle {
              text-align: center;
            }

            .align-left {
              text-align: left;
              justify-content: flex-start;
            }

            .padding-left {
              padding-left: 7%;
            }

            .align-right {
              text-align: right;
              justify-content: flex-end;
            }

            .padding-right {
              padding-right: 10%;
            }

						.row {
							justify-content: center;
							align-items: center;
						}

						.home {
              background-color: white;
              margin: 5% 5% 4% 5%;
              border-radius: 10px;
              box-shadow: 0px 2px 15px #e6e6e6;
						}

            .browser {
              box-shadow: 0px 2px 10px #f2f2f2;
              border: 1px solid #f5f5f5;
              border-radius: 10px;
              width: 500px;
              height: auto;
            }

            .terminal {
              filter: none;
              max-width: 400px;
            }

            .image {
              max-width: 50%;
            }

						.intro {
							font-family: 'Titillium Web';
							font-style: normal;
							font-weight: normal;
							line-height: normal;
							font-size: 30px;
							text-align: right;
              max-width: 400px;
						}

						.block-rtl {
              align-self: flex-end;
						}

            .block-ltr {
              align-self: flex-start;
            }

            .editor {
              width: 500px;
              height: 340px;
            }

            .step {
              font-family: Titillium Web !important;
              max-width: 600px;
              display: flex;
            }

            .step-wrapper {
              max-width: 420px !important;
              border-radius: 10px;
            }

            .step-content {
              position: relative;
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

            .step-number {
              color: #E7E7FB;
              font-weight: bold;
              font-size: 70px;
              margin-right: 0.3em;
              margin-top: 0.2em;
              position: relative;
            }

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
