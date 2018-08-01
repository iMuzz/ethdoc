import Macbook from '../components/macbook';
import Button from '../components/button';
import Logo from '../components/logo';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     return (
      <div className="home">
        <div className="header"></div>
        <div className="row row-center">
          <div className="col-xs-4 col-xs-offset-1">
            <div className="intro">
              Create documentation for your smart contracts in a matter of <strong>seconds</strong>.
              <div className="block-rtl">
                <Button>View Demo</Button>
              </div>
            </div>
          </div>
          <div className="col-xs-7 image animated fadeIn">
            <Macbook />
          </div>
        </div>
        <style jsx>
          {`
            .header {
              padding: 50px;
            }
            .logo {
              font-family: 'Titillium Web';
              color: #8798FF;
              font-size: 30px;
              margin-left: 20px;
            }

            .home {
              background-color: white;
              width: 100%;
              min-height: 100vh;
            }

            .row-center {
              display: flex !important;
              align-items: center !important;
              align-content: center !important
            }

            .intro {
              font-family: 'Titillium Web';
              font-style: normal;
              font-weight: normal;
              line-height: normal;
              font-size: 30px;
              text-align: right;
              margin-top: 10px;
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
