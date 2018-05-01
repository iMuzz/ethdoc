import generateCodeSample from '../lib/generateCodeSample';
const Embed = require('react-runkit')

const helloSource = `console.log('Hello, world!')`

// const codeSample = (
//   <div className="code-highlighting">
//     <pre className="code-highlight">
//       <code className={`hljs lang-javascript`}
//         dangerouslySetInnerHTML={{ __html: highlight('javascript', code).value}
//       }
//       />
//     </pre>

//     <style>
//       {`
//         .code-highlight {
//           color: #b8bff2;
//           background-color: #0a1a36;
//           padding-top: 0px;
//         }
//       `}
//     </style>
//     <button onClick={this.sendTransaction}>
//       Run Code
//       <style>
//         {`
//           button { 
//             background-color: #4762ff;
//             padding: 10px;
//             border: none;
//             color: white;
//             border-radius: 3px;
//             transition: all .3s;
//             position: relative;
//             top: 0px;
//           }

//           button:hover {
//             background-color: #6078FF;
//             padding: 10px;
//             cursor: pointer;
//             top: -1px;
//           }
//         `}
//       </style>
//     </button>
//   </div>
// );
 
class Runkit extends React.Component {
  run() {
    this.refs.embed.evaluate()
  }
  
  render() {
    const { method } = this.props;
    const source = generateCodeSample({ contractName: 'ZRXContract', methodName: method.name})
    return <Embed source={ source } readOnly={ true } ref='embed' onLoad={ this.run.bind(this) }/>
  }
}

export default Runkit;