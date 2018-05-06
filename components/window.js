import { Spinner } from '@blueprintjs/core';

export default ({ children, className }) => {
  console.log(className)
  return (
    <div className={`macwindow ${className}`}>
      <div className="header">
        <div className="row center-xs middle-xs">
          <div className="row circ-container">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
          </div>
          <div className="url">
            <span className="secure">
              <span className="pt-icon-standard pt-icon-lock" />
              Secure
            </span>
            <span className="domain">
              https://google.com
            </span>
          </div>
        </div>
      </div>
      { children }
      <style>
        {`
          .domain {
            padding-right: 100px;
            padding-left: 8px;
            color: #000000;
          }
          .secure {
            color: #4D7B47;
            font-size: 12px;
          }
          span.pt-icon-lock {
            margin-right: 4px;
            font-size: 12px;
            position: relative;
            top: -1px;
          }
          .url {
            border-radius: 5px;
            border: 1px solid #b1b1b1;
            padding: 5px 8px;
            paddin-right: 25px;
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