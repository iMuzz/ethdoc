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
            padding-top: 10%;
            width: 650px;
            height: 500px;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Laptop;
