import Button from '../components/ui/button';
import Laptop from '../components/laptop';
import Editor from '../components/svg/editor.svg';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="home">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 intro">
              Create documentation for your smart contracts in a matter of
              <strong> seconds</strong>.
              <div className="block-rtl">
                <Button className="demo">View Demo</Button>
              </div>
            </div>
            <div className="col-xs-6">
              <Laptop />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 block-rtl">
              <Editor className="editor" />
            </div>
            <div className="col-xs-8 step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h1 className="step-header">Document your code.</h1>
                <p className="step-text">Use the <a>Ethereum Natural Specification</a> form to write comments in your files.</p>
              </div>
            </div>
          </div>
        </div>
				<style>
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


						.row {
							justify-content: center;
							align-items: center;
						}

						.home {
              background-color: white;
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
							direction: rtl;
						}

            .editor {
              width: 500px;
              height: 340px;
            }

            .step {
              max-width: 500px;
              display: flex;
              flex-flow: row nowrap;
              justify-content: flex-start;
              align-items: center;
            }

            .step-header {
              margin-top: 2rem;
            }

            .step-text {
              font-size: 1.3rem;
              font-weight: 300;
              line-height: 2rem;
            }

            .step-number {
              color: rgba(135, 147, 220, 0.15);
              font-weight: bold;
              font-size: 200px;
            }

						@media (max-width: 800px) {
							.homepage {
								display: block;
							}
						}
					`}
				</style>
			</div>
		);
	}
}

export default HomePage;
