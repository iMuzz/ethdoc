import classNames from 'classnames';

export default ({ title, isActive, onClick }) => {

  const answer = `
  {
    blockHash: "0x5090c1a25a2accf4cb47a...",
    blockNumber: 2561557,
    totalSupply: 1000000,
  }
  `
  return (
    <div className="error-card">
      <pre>
        <code>
          { answer }
        </code>
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
        `}
      </style>
    </div>

  );
} 