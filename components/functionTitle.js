// import classNames from 'classnames';

import PropTypes from 'prop-types';
import SimpleHeader from './simpleHeader';

class FunctionTitle extends React.Component {
  _renderInput(input) {
    const { name, type } = input;
    return (
      <span className="input">
        <span className="type">{ type } </span>
        <span className="name">{ name }</span>
        <style>
          {`
            .input {
              margin: 0px 2px;
            }
          `}
        </style>
      </span>
    );
  }

  _renderInputs(inputs) {
    return inputs.map((input, i) => {
      const isNotLastInput = !(inputs.length - 1 === i);
      return (
        <span className="input-container">
          { this._renderInput(input) }
          {(isNotLastInput) && (
            <span>,</span>
          )}
        </span>
      )
    })
  }

  render() {
    const { name, inputs } = this.props;
    return (
      <SimpleHeader>
        { name }({ this._renderInputs(inputs) })
      </SimpleHeader>
    );
  }
}

FunctionTitle.propTypes = {
  name: PropTypes.string.isRequired,
  inputs: PropTypes.array,
};


export default FunctionTitle;