import styled from 'styled-components';
import { ArrowUndoOutline, HomeOutline } from 'react-ionicons';
import { Link } from 'react-router-dom';

export default function RenderAboutUs() {
  return (
    <Body>
      <Container>
        <Link to="/menu">
          <ArrowUndoOutline
            className="marginLeft"
            color={'#211b18'}
            height="40px"
            width="40px"
          />
        </Link>
        <h2> BAT BANK</h2>
        <Link to="/home">
          <HomeOutline
            className="marginRight"
            color={'#211b18'}
            height="40px"
            width="40px"
          />
        </Link>
      </Container>
      <Main>
        <h4>
          Meu nome é Guilherme Pena Matsumura e atualmente estou estudando na
          Driven para me tornar um desenvolvedor fullstack.
        </h4>

        <Button href="https://github.com/GuiMatsumura">Github</Button>
      </Main>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #211b18;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .cursorPointer {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff500;
  box-shadow: 10px 10px 8px #231e1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  left: 0;
  .marginLeft {
    margin-left: 20px;
  }
  .marginRight {
    margin-right: 20px;
  }
  h2 {
    color: #211b18;
    font-family: 'Silkscreen';
    font-size: 30px;
  }
`;
const Main = styled.div`
  margin-top: 140px;
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h4 {
    color: #fff500;
    margin-bottom: 40px;
  }
`;

const Button = styled.a`
  height: 60px;
  width: 320px;
  border-radius: 5px;
  background-color: #fff500;
  color: #211b18;
  font-size: 20px;
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: none;
`;
