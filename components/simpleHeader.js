import classNames from 'classnames';

class SimpleHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { functionName } = this.props;

    return (
      <div className="simple-header">
        { functionName }
      <style>
        {`
          .simple-header{ 
            padding: 15px;
            border-bottom: 1px solid #ebebf3;
            font-size: 18px;
          }
        `}
        </style>
      </div>
    );
  }
}

export default SimpleHeader;