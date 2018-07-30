/* styles.js */
import css from 'styled-jsx/css'

const BUTTON_PRIMARY = `#4762ff`;
const BUTTON_PRIMARY_HOVER = `#6078FF`;

export const button = css`
  button {
    display: block;
    padding: 8px 15px 8px 15px;
    margin-top: 1em;
    border-radius: 5px;
    background: rgba(71, 98, 255, 1) !important;
    font-family: 'Titillium Web';
    text-transform: uppercase;
    font-weight: normal !important;
    font-size: 14px;
    color: #fff;
    border: 0 none;
    line-height 16px;
    transition: color .05s ease-in-out, background .2s ease-in-out, border .1s ease-in-out, box-shadow .1s ease-in-out, transform .1s ease-in-out !important;
    cursor: pointer;
  }

  button:hover {
    transform: translate(0px, 2px);
  }

  button:focus {
    outline: none;
  }

  button:active {
    color: rgba(210, 217, 255, 1) !important;
    background: rgba(71, 98, 255, 0.9) !important;
    box-shadow: 0px 2px 1px -1px rgba(71, 98, 255, 0.4);
    transform: translate(0px, 5px);
  }
`
