import styled from 'styled-components';
import { ArrowRedoOutline, HelpCircleOutline } from 'react-ionicons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import TokenContext from './context/Token';
import axios from 'axios';

export default function RenderMenu() {
  const [token, setToken] = useContext(TokenContext);
  const [name, setName] = useState('');
  const [bankNumber, setBankNumber] = useState('00000');

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get('https://batbank-back.herokuapp.com/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });

    promise
      .then((res) => {
        setName(res.data.name);
        setBankNumber(res.data.bankNumber);
      })
      .catch(() => {
        navigate('/');
        alert('Usuário não autorizado');
      });
  }, []);

  return (
    <>
      <Body>
        <Header>
          <h2>{name}</h2>
          <h3>Agência 0001 - conta {bankNumber}</h3>
          <h3>Banco 0987 - BatBank S.A</h3>
        </Header>
        <Main>
          <Container>
            <h2>Editar dados do perfil</h2>
            <Link to="/profile">
              <ArrowRedoOutline
                className="arrowRight"
                color={'#000000'}
                height="40px"
                width="40px"
              />
            </Link>
          </Container>
          <Container>
            <h2>Central de ajuda</h2>
            <Link to="/help">
              <ArrowRedoOutline
                className="arrowRight"
                color={'#000000'}
                height="40px"
                width="40px"
              />
            </Link>
          </Container>

          <Container>
            <h2>Segurança</h2>
            <Link to="/help">
              <ArrowRedoOutline
                className="arrowRight"
                color={'#000000'}
                height="40px"
                width="40px"
              />
            </Link>
          </Container>
          <Container>
            <h2>Sobre o BatBank</h2>
            <Link to="/aboutus">
              <ArrowRedoOutline
                className="arrowRight"
                color={'#000000'}
                height="40px"
                width="40px"
              />
            </Link>
          </Container>
          <Container>
            <h2>#Maintence</h2>
          </Container>
        </Main>
      </Body>
    </>
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

const Header = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #fff500;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 10px 10px 8px #231e1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #211b18;
    font-family: 'Silkscreen';
    font-size: 20px;
  }
  h3 {
    color: #211b18;
    font-family: 'Silkscreen';
    font-size: 18px;
    margin-top: 5px;
  }
`;

const Main = styled.div`
  margin-top: 140px;
  height: 75vh;
  width: 100vw;
`;

const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: #fff500;
  box-shadow: 10px 10px 8px #231e1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    font-family: 'Poppins';
    font-size: 25px;
    color: #231e1a;
    margin: 0 15px 10px 15px;
  }
  .arrowRight {
    margin-right: 20px;
    cursor: pointer;
  }
`;
