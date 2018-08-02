import Macbook from '../components/svg/macbook.svg';

class Laptop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Macbook className='macbook' />
        <style>
        {`
          .macbook {
            padding-top: 2em;
            width: 500px;
            height: 400px;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Laptop;
