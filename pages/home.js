import React from 'react';
import { Terminal } from 'react-window-ui'
import classNames from 'classnames';
import Anime from 'react-anime';

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
      <div className="homepage ">
        <div className="terminal-container row center-xs">
          <Terminal className={classNames('terminal animated', { fadeOutLeft: this.state.fadeOutLeft })}>
            <video width="700" height="450" autoPlay="autoplay" ref={el => this.videoElement = el}>
              <source src="https://dzwonsemrish7.cloudfront.net/items/1I2c110W2W050y2k110v/terminal.mp4?X-CloudApp-Visitor-Id=2790687" type="video/mp4" />
            </video>
          </Terminal>
        </div>
        <style>
          {`  
            .animated {
              animation-duration: .5s;
            }
            .homepage {
              padding: 25px;
            }
          `}
        </style>
      </div>
    );
  }
}


// {
  
// }
export default HomePage;