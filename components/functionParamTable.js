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
        <div className="row param-row margin-override" key={input.name}>
          <div className="col-xs-2 padding-override">
            <strong>
              { input.name }
            </strong>
          </div>
          <div className="col-xs-2 padding-override">
            { input.type }
          </div>

          <div className="col-xs-8 padding-override">
            { params[input.name] }
          </div>

          <style>{`
            .param-row {
              padding: 15px 0px;
              border-bottom: 1px solid #ebebf3;
            }

            .param-row:last-child {
              border-bottom: none;
            }
          `}</style>
        </div>
      );
    })
  }

  render() {
    const { inputs, params } = this.props;
    if (inputs.length === 0 || params === undefined) { return (<span />)}
    return (
      <div>
        <div className="params-table">
          <div className="params-header">
            <div className="row margin-override">
              <div className="col-xs-2 padding-override">
                <div className="title">
                  <strong>
                    Name
                  </strong>
                </div>
              </div>
              <div className="col-xs-2 padding-override">
                <div className="title">
                  <strong>
                    Type
                  </strong>
                </div>
              </div>
              <div className="col-xs-8 padding-override">
                <div className="title">
                  <strong>
                    Description
                  </strong>
                </div>
              </div>
              <style>
                {`
                  .title {
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #6177ff;
                    letter-spacing: 1px;
                  }
                `}
              </style>
            </div>
          </div>

          { this.renderParamRows() }

          <style>
            {`
              .params-table {
                margin: 25px 0px 25px 0px;
              }
              .params-header {
                border-bottom: 1px solid #ebebf3;
                padding-bottom: 10px;
              }
              .padding-override {
                padding: 0px;
              }
              .margin-override {
                margin: 0px;
              }
            `}
          </style>
        </div>
      </div>
    );
  }
}

FunctionParamTable.propTypes = {
  inputs: PropTypes.array,
};

export default FunctionParamTable;
