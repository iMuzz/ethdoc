import classNames from 'classnames';

export default ({ title, isActive, onClick }) => {
  return (
    <div className="error-card">
      <pre>
        <code>
          console.log('hello, world')
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
            border: 1px solid #eaeaea;
            border-radius: 0px;
            color: white
          }
        `}
      </style>
    </div>

  );
} 