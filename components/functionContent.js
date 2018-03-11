import PropTypes from 'prop-types';
import FunctionTitle from './functionTitle';
import FunctionParamTable from './functionParamTable';

class FunctionContent extends React.Component {
  render() {
    const { method } = this.props;
    // console.log(method);

    return (
      <div>
        <FunctionTitle
          name={method.name}
          inputs={method.inputs}
        />
        <div className="content-padding">
          <FunctionParamTable
            inputs={method.inputs}
            params={method.devdoc.params}
          />
          <style>{`
            .content-padding {
              padding: 15px;
            }
          `}</style>
        </div>
      </div>
    );
  }
}

FunctionContent.propTypes = {
  name: PropTypes.string
};


export default FunctionContent;