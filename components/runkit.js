import { highlight } from 'highlight.js';
import AnimateHeight from 'react-animate-height';
import generateCodeSample from '../lib/generateCodeSample';
import ResultView from './errorCard';
// const Embed = require('react-runkit')
// return (<Embed source={ source } ref='embed' onLoad={ this.run.bind(this) }/>);
 
const buttonStyles = (
  <style>
  {`
    button {
      background-color: #4762ff;
      padding: 10px 15px;
      border: none;
      color: white;
      border-radius: 3px;
      transition: all .3s;
      font-size: 14px;
      position: relative;
    }

    button:hover {
      background-color: #6078FF;
      padding: 10px 15px;
      cursor: pointer;
      top: -1px;
    }
    button:focus {
      outline: none;
    }
  `}
</style>
);

class Runkit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      answer: undefined,
    }

    this.sendTransaction = this.sendTransaction.bind(this);
    this.renderAnswer = this.renderAnswer.bind(this);
  }

  run() {
    this.refs.embed.evaluate()
  }

  componentWillReceiveProps(pre, next) {
    this.setState({ isOpen: false })
  }

  renderAnswer({ answer, isTransaction, transactionHash }) {
    if (isTransaction) {
      return (
        <div className="transaction">
          <a href={`https://ropsten.etherscan.io/tx/${transactionHash}`} target="_blank">
            <button style={{ width: "100%" }}>
              View Transaction
            </button>
          </a>
          { buttonStyles }
        </div>
      );
    } else {
      return (
        <div>
          { JSON.stringify(answer, null, 2) }
        </div>
      );
    }
  }

  sendTransaction() {
    this.props.cta((response) => {
      this.setState({
        answer: this.renderAnswer(response),
      }, () => {
        this.setState({ isOpen: true });
      });
    });
  }
  
  render() {
    const { method } = this.props;
    const source = generateCodeSample({ contractName: 'TokenRegistry', method})
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
              .hljs-keyword, .hljs-selector-tag {
                color: #3296d3
              }
              .hljs-number {
                color: #fa755a
              }
              .hljs-built_in, .hljs-builtin-name, .hljs-literal, .hljs-type, .hljs-params, .hljs-meta, .hljs-link {
                color: #e39f48
              }
              .hljs-string, .hljs-symbol, .hljs-bullet, .hljs-addition {
                color: #20b57e
              }
              pre {
                font-size: 15px;
              }
            `}
          </style>
          <AnimateHeight
            duration={ 300 }
            height={ this.state.isOpen ? 'auto' : 0 }
          >
            <ResultView didRun answer={this.state.answer}/>
          </AnimateHeight>
          <div className="runkit-footer row end-xs">
            <button onClick={this.sendTransaction}>
              Run Code
            </button>
            { buttonStyles }
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