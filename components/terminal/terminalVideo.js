import classNames from 'classnames';

class TerminalVideo extends React.Component {
  render() {
    return (
      <div className="terminal-container row center-xs">
        <Terminal className="terminal">
          <video width="700" height="450" autoPlay="autoplay" ref={el => this.videoElement = el}>
            <source src="https://dzwonsemrish7.cloudfront.net/items/1I2c110W2W050y2k110v/terminal.mp4?X-CloudApp-Visitor-Id=2790687" type="video/mp4" />
          </video>
        </Terminal>
      </div>
    );
  }
}
export default TerminalVideo;