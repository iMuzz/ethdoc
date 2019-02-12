// import classNames from 'classnames';
import PropTypes from 'prop-types'
import { Popover } from '@blueprintjs/core'

class FunctionParamTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPopoverOpen: true,
    }
    this.renderParamRows = this.renderParamRows.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.disablePopover = this.disablePopover.bind(this)
  }

  disablePopover() {
    this.setState({
      isPopoverOpen: true,
    })
  }

  handleInputChange(e, i) {
    i.value = e.target.value
    this.props.updateMethod(e.target.value)
  }

  renderParamRows() {
    const { params } = this.props

    return this.props.inputs.map((input, i) => {
      const argumentInput = (
        <input
          className="eth-input"
          type="text"
          placeholder={input.name}
          onChange={e => this.handleInputChange(e, input)}
          onClick={this.disablePopover}
        />
      )

      return (
        <div className="row param-row margin-override" key={input.name}>
          <div className="col-xs-3 padding-override">
            <strong>{input.name}</strong>
          </div>
          <div className="col-xs-2 padding-override">{input.type}</div>

          <div className="col-xs-4 padding-override">{params[input.name]}</div>

          <div className="col-xs-3 padding-override">
            {i === 0 ? (
              <Popover
                content={
                  <div className="popover-content">
                    Fill out these fields to run the code below!
                  </div>
                }
                className="popover-override"
                defaultIsOpen
                autoFocus={false}
                enforceFocus={false}
                isOpen={!this.state.isPopoverOpen}
              >
                {argumentInput}
              </Popover>
            ) : (
              argumentInput
            )}
          </div>

          <style>{`
            .popover-override {
              width: 100%;
            }
            .popover-content {
              padding: 10px;
              max-width: 250px;
            }
            .param-row {
              padding: 15px 0px;
              border-bottom: 1px solid #ebebf3;
            }

            .param-row strong {
              word-wrap: break-word;
            }

            .param-row:last-child {
              border-bottom: none;
            }

            .eth-input {
              border: 1px solid #f2f5f6;
              border-bottom: none;
              box-shadow: 0 1px 2px -1px #a9bdc2;
              font-size: 14px;
              transition: .2s ease-out;
              border-radius: 3px;
              min-height: 25px;
              padding: 0px 10px;
              width: 100%;
            }
            .eth-input::placeholder {
              color: #dadee3;
            }

            .eth-input:focus {
              outline: none;
            }
          `}</style>
        </div>
      )
    })
  }

  render() {
    const { inputs, params } = this.props
    if (inputs.length === 0 || params === undefined) {
      return <span />
    }
    return (
      <div>
        <div className="params-table">
          <div className="params-header">
            <div className="row margin-override">
              <div className="col-xs-3 padding-override">
                <div className="title">
                  <strong>Name</strong>
                </div>
              </div>
              <div className="col-xs-2 padding-override">
                <div className="title">
                  <strong>Type</strong>
                </div>
              </div>
              <div className="col-xs-4 padding-override">
                <div className="title">
                  <strong>Description</strong>
                </div>
              </div>
              <div className="col-xs-3 padding-override">
                <div className="title">
                  <strong>Input</strong>
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

          {this.renderParamRows()}

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
                padding-left: 0px;
              }
              .margin-override {
                margin: 0px;
              }
            `}
          </style>
        </div>
      </div>
    )
  }
}

FunctionParamTable.propTypes = {
  inputs: PropTypes.array,
}

export default FunctionParamTable
