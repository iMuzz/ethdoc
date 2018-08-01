import Laptop from './assets/laptop.svg.react';

export default class Macbook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div>
          <Laptop width={'680'} height={'440'} />
          <style jsx>
          {`
          `}
          </style>
        </div>
      )
    }
}