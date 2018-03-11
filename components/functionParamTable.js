// import classNames from 'classnames';

import PropTypes from 'prop-types';

class FunctionParamTable extends React.Component {

  constructor(props) {
    super(props);

    this.renderParamRows = this.renderParamRows.bind(this);
  }

  renderParamRows() {
    const { params } = this.props;

    return this.props.inputs.map((input) => {
      return (
        <div className="row" key={input.name}>
          <div className="col-xs-2">
            { input.name }
          </div>
          <div className="col-xs-2">
            { input.type }
          </div>

          <div className="col-xs-8">
            { params[input.name] }
          </div>
        </div>
      );
    })
  }

  render() {
    const { inputs, params } = this.props;
    return (
      <div className="params-table">
        <div className="params-header">

          <div className="row">
            <div className="col-xs-2">
              Name
            </div>
            <div className="col-xs-2">
              Type
            </div>
            <div className="col-xs-8">
              Description
            </div>
          </div>
        </div>

        { this.renderParamRows() }

        <style>
          {`
            .params-table {
              border: 1px solid #ebebf3;
              border-radius: 6px;
              padding: 10px;
            }
            .params-header {
              border-bottom: 1px solid #ebebf3;
              padding-bottom: 5px;
            }
          `}
        </style>
      </div>
    );
  }
}

FunctionParamTable.propTypes = {
  inputs: PropTypes.array,
};

export default FunctionParamTable;
