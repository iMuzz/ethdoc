/* styles.js */
import css from 'styled-jsx/css'

const BUTTON_PRIMARY = `#4762ff`;
const BUTTON_PRIMARY_HOVER = `#6078FF`;

export const button = css`
  button {
    background-color: ${BUTTON_PRIMARY};
    padding: 10px 15px;
    border: none;
    color: white;
    border-radius: 3px;
    transition: all .3s;
    font-size: 14px;
    position: relative;
  }

  button:hover {
    background-color: ${BUTTON_PRIMARY_HOVER};
    padding: 10px 15px;
    cursor: pointer;
    top: -1px;
  }

  button:focus {
    outline: none;
  }
`;
