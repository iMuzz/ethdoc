import React from 'react';
import { Terminal, Browser } from 'react-window-ui'
import classNames from 'classnames';
import Anime from 'react-anime';
import DocumentationCtrl from './index';
import MacWindow from '../components/window';

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

    setTimeout(() => {
      this.videoElement.play();
    }, 4000)
  }

  render() {
     return (
      <div className="homepage row middle-xs center-xs">
        <div className="window-container row center-xs">
          <Terminal className={classNames('terminal animated', { fadeOutLeft: this.state.fadeOutLeft })}>
            <video width="1000" height="650" ref={el => this.videoElement = el}>
              <source src="https://dzwonsemrish7.cloudfront.net/items/0e3P1A1k3t3l433y0x03/deom.mov?X-CloudApp-Visitor-Id=2790687" type="video/mp4" />
            </video>
          </Terminal>
          <MacWindow className={classNames('browser animated', { fadeInRight: this.state.fadeOutLeft })}>
            <iframe className="embedded" src="http://localhost:3000"></iframe>
          </MacWindow>
        </div>
        <style>
          {`  
            .animated {
              animation-duration: .5s;
            }
            .homepage {
              padding: 25px;
              height: 100vh;
              background-color: black;
            }
            .terminal, .browser {
              position: absolute;
              box-shadow: 0 2px 5px 0 rgba(51, 51, 79, 0.2);
              border: none;
            }

            .terminal {
              z-index: 3;
              border: 1px solid #6f6f6f;
              padding-top: 40px;
            }

            video {
              position: relative;
              left: -12px;
            }

            .embedded {
              width: 100%;
              height: 100%;
              border: none;
              border-radius: .5rem;
              border-top-left-radius: 0px;
              border-top-right-radius: 0px;
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
              width: 1100px;
              height: 700px;
            }
          `}
        </style>
      </div>
    );
  }
}


export default HomePage;
