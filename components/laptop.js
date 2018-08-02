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

          @media (max-width: 1250px) {
            .macbook {
              width: 80%;
              height: 80%;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

export default Laptop;
