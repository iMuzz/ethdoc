import Macbook from '../components/macbook';
import { button } from '../styles/styles';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     return (
      <div className="home">
        <div className="row">
          <div className="col-xs-4 col-xs-offset-1 intro">
            Create documentation for your smart contracts in a matter of <strong>seconds</strong>.
            <div className="block-rtl">
              <button>View Demo</button>
              <style>
                { `
                  ${button}
                  button {
                    box-shadow: 0px 2px 1px -1px #d2dfe2;
                  }`
                }
              </style>
            </div>
          </div>
          <div className="col-xs-7 image">
            <Macbook />
          </div>
        </div>
        <style jsx>
          {`

            .row {
              justify-content: center;
              align-items: center;
            }

            .home {
              background-color: white;
              width: 100%;
              min-height: 100vh;
            }

            .intro {
              font-family: 'Titillium Web';
              font-style: normal;
              font-weight: normal;
              line-height: normal;
              font-size: 30px;
              text-align: right;
            }

            .block-rtl {
              direction: rtl;
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
