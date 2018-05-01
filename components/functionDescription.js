import PropTypes from 'prop-types';

class FunctionDescription extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <div className="details">
        { details }
          <style>{`
            .details {
              margin-bottom: 15px;
            }
          `}</style>
      </div>

    );
  }
}

FunctionDescription.propTypes = {
  name: PropTypes.string
};


export default FunctionDescription;