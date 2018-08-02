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

          // BREAKPOINTS
          
          @media (max-width: 1430px) {
            .macbook {
              width: 85%;
              height: 85%;
            }
          }

          @media (max-width: 1250px) {
            .macbook {
              width: 80%;
              height: 80%;
            }
          }

          @media (max-width: 1128px) {
            .macbook {
              width: 90%;
              height: 90%;
            }
          }

          @media (max-width: 773px) {
            .macbook {
              width: 600px;
              order: 1;
              padding-top: unset;
            }
          }

          @media (max-width: 560px) {
            .macbook {
              width: 400px;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

export default Laptop;
