import PropTypes from 'prop-types';
import FunctionTitle from './functionTitle';
import FunctionParamTable from './functionParamTable';
import FunctionDescription from './functionDescription';
import Runkit from './runkit';

class FunctionContent extends React.Component {
  render() {
    const { method } = this.props;

    return (
      <div>
        <FunctionTitle
          name={method.name}
          inputs={method.inputs}
        />
        <div className="content-padding">
          <FunctionDescription details={method.devdoc.details}/>

          <FunctionParamTable
            inputs={method.inputs}
            params={method.devdoc.params}
          />

          <Runkit />


          <style>{`
            .content-padding {
              padding: 25px;
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