class SimpleHeader extends React.Component {
  render() {
    return (
      <div className="simple-header">
        { this.props.children }
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