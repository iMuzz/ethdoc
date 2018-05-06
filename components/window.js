import { Spinner } from '@blueprintjs/core';

export default ({ children  }) => {
  return (
    <div className="macwindow">
      <div className="header">
        <div className="row center-xs">
          <div className="row circ-container">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
          </div>
          <span className="url">
            https://google.com
          </span>
        </div>
      </div>
      { children }
      <style>
        {`
          .url {
            border-radius: 5px;
            padding: 5px 100px;
          }
          .circle {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: red;
            margin-right: 5px;
          }
          .header {
            padding: 8px;
            background-color: #DCDCDC;
            border-top-right-radius: .5rem;
            border-top-left-radius: .5rem;
            min-width: 1000px;
            position: relative;
          }
          .circ-container {
            position: absolute;
            left: 0px;
            margin-left: 5px;
          }
          .red {
            margin-left: 10px;
            background-color: #DF7165;
          }
          .yellow {
            background-color: #EFBF63;
          }
          .green {
            background-color: #7CC163;
          }
        `}
      </style>
    </div>
  );
};