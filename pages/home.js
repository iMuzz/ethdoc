import Macbook from '../components/macbook';

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
            <div className="block-rtl"><button className="demo">View Demo</button></div>
          </div>
          <div className="col-xs-7 image">
            <Macbook />
          </div>
        </div>
        <style jsx>
          {`
            /* CSS */

            html, body {
              background: #fff;
            }

            .row {
              justify-content: center;
              align-items: center;
            }

            .home {
              margin-left: 5%;
              margin-right: 5%;
              margin-top: 5%;
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

            .demo {
              display: block;
              padding: 8px 15px 8px 15px;
              margin-top: 1em;
              border: 1px solid rgba(71, 98, 255, 0.5);
              border-radius: 5px;
              background: rgba(71, 98, 255, 1) !important;
              box-shadow: 0px 2px 1px -1px #d2dfe2;
              font-family: 'Titillium Web';
              text-transform: uppercase;
              font-weight: normal !important;
              font-size: 14px;
              color: #fff;
              margin: 20 5 5 0;
              border: 0 none;
              line-height 16px;
              transition: color .05s ease-in-out, background .2s ease-in-out, border .1s ease-in-out, box-shadow .1s ease-in-out, transform .1s ease-in-out !important;
              cursor: pointer;
            }

            .demo:hover {
              transform: translate(0px, 2px);
            }

            .demo:focus {
              outline: none;
            }

            .demo:active {
              color: rgba(210, 217, 255, 1) !important;
              background: rgba(71, 98, 255, 0.9) !important;
              box-shadow: 0px 2px 1px -1px rgba(71, 98, 255, 0.4);
              transform: translate(0px, 5px);
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
