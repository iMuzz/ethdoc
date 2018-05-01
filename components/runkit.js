import { highlight } from 'highlight.js';
import AnimateHeight from 'react-animate-height';
import generateCodeSample from '../lib/generateCodeSample';
import ResultView from './errorCard';
// const Embed = require('react-runkit')
// return (<Embed source={ source } ref='embed' onLoad={ this.run.bind(this) }/>);
 
class Runkit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }

    this.sendTransaction = this.sendTransaction.bind(this);
  }
  run() {
    this.refs.embed.evaluate()
  }

  sendTransaction() {
    console.log('sendTransaction!');
    this.setState({ isOpen: true })
  }
  
  render() {
    const { method } = this.props;
    const source = generateCodeSample({ contractName: 'ZRXContract', methodName: method.name})
    return (
      <div>
        <div className="code-highlighting">
          <pre className="code-highlight">
            <code className={`hljs lang-javascript`}
              dangerouslySetInnerHTML={{ __html: highlight('javascript', source).value}}
            />
          </pre>

          <style>
            {`
              .code-highlighting {
                position: relative;
              }
              .code-highlight {
                color: #b8bff2;
                background-color: #0a1a36;
                margin: 0px;
                padding-top: 0px;
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
              }

              pre {
                font-size: 15px;
              }
            `}
          </style>
          <AnimateHeight
            duration={ 500 }
            height={ this.state.isOpen ? 'auto' : 0 }
          >
            <ResultView didRun />
          </AnimateHeight>
          <div className="runkit-footer row end-xs">
            <button onClick={this.sendTransaction}>
              Run Code
              <style>
                {`
                  button {
                    background-color: #4762ff;
                    padding: 10px;
                    border: none;
                    color: white;
                    border-radius: 3px;
                    transition: all .3s;
                  }

                  button:hover {
                    background-color: #6078FF;
                    padding: 10px;
                    cursor: pointer;
                    top: -1px;
                  }
                `}
              </style>
            </button>
            <style>
              {`
                .runkit-footer {
                  background-color: #0a1a36;
                  padding: 15px;
                  border-bottom-left-radius: 3px;
                  border-bottom-right-radius: 3px;
                  margin: 0px;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    );
  }
}

export default Runkit;