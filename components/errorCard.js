import classNames from 'classnames';
import { Spinner } from '@blueprintjs/core';

export default ({ loading }) => {

  const answer = `
  {
    blockHash: "0x5090c1a25a2accf4cb47a...",
    blockNumber: 2561557,
    totalSupply: 1000000,
  }
  `
  return (
    <div className="error-card row center-xs middle-xs">
      <pre className={classNames('row', { middle: loading })}>
        {loading ? (
          <Spinner />
        ) : (
          <code className="animated fadeIn">
            { answer }
          </code>
        )}
      </pre>
      <style>
        {`
          .error-card {
            height: 100%;
            background-color: #0a1a36;
            color: white;
            font-family: monospace;
            padding: 15px;
          }
          .error-card pre {
            margin: 0;
            background: none;
            height: 100%;
            border-radius: 0px;
            color: #7aff97;
          }

          .error-card pre.middle {
            align-items: center;
          }

          .error-card code {
            display: block;
            text-align: left;
          }

          .pt-spinner .pt-spinner-track {
            stroke: rgb(113, 237, 144);
          }
        `}
      </style>
    </div>

  );
} 