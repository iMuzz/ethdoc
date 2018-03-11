import PropTypes from 'prop-types';

class FunctionDescription extends React.Component {
  render() {
    return (
      <div>
        this is going to be a really long FunctionDescription
      </div>
    );
  }
}

FunctionDescription.propTypes = {
  name: PropTypes.string
};


export default FunctionDescription;