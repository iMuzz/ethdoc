import PropTypes from 'prop-types';

class FunctionDescription extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <div>
        { details }
      </div>
    );
  }
}

FunctionDescription.propTypes = {
  name: PropTypes.string
};


export default FunctionDescription;