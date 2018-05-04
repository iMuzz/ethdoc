import React from 'react';
import { Terminal, Browser } from 'react-window-ui'
import classNames from 'classnames';
import Anime from 'react-anime';
import DocumentationCtrl from './index';

class HomePage extends React.Component {
  constructor() {
    super();

    this.someFunc = this.someFunc.bind(this);
    this.state = {
      fadeOutLeft: false
    }
  }

  someFunc() {
    console.log('someFunc')
  }

  componentDidMount() {
    this.videoElement.addEventListener("ended", () => {
      this.setState({
        fadeOutLeft: true
      })
    });
  }

  render() {
     return (
      <div className="homepage row middle-xs center-xs">
        <div className="window-container row center-xs">
          <Terminal className={classNames('terminal animated', { fadeOutLeft: this.state.fadeOutLeft })}>
            <video controls width="1000" height="650" ref={el => this.videoElement = el}>
              <source src="https://dzwonsemrish7.cloudfront.net/items/1I2c110W2W050y2k110v/terminal.mp4?X-CloudApp-Visitor-Id=2790687" type="video/mp4" />
            </video>
          </Terminal>

          <Browser className={classNames('browser animated', { fadeInRight: this.state.fadeOutLeft })} >
            <iframe className="embedded" src="http://localhost:3000"></iframe>
          </Browser>
        </div>
        <style>
          {`  
            .animated {
              animation-duration: .5s;
            }
            .homepage {
              padding: 25px;
              height: 100vh;
              background-color: white;
            }
            .terminal, .browser {
              position: absolute;
              box-shadow: 0 2px 5px 0 rgba(51, 51, 79, 0.2);
              border: none;
            }

            .terminal {
              z-index: 3;
            }

            .embedded {
              width: 100%;
              height: 100%;
              border: none;
              border-radius: .5rem;
            }
            
            .browser::before {
              background-color: #eaeaea;
              border: none
            }
            .browser {
              opacity: 0;
              padding: 0;
              width: 100%;
              height: 100%;
            }
            .window-container {
              position: relative;
              width: 1050px;
              height: 700px;
            }
          `}
        </style>
      </div>
    );
  }
}


export default HomePage;
