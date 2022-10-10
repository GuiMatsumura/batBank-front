import styled from 'styled-components';
import { ArrowRedoOutline, HelpCircleOutline } from 'react-ionicons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import TokenContext from './context/Token';
import axios from 'axios';

export default function RenderHome() {
  const [token, setToken] = useContext(TokenContext);
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get('https://batbank-back.herokuapp.com/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });

    promise
      .then((res) => {
        setName(res.data.name);
        setProfileImage(res.data.pictureUrl);
      })
      .catch(() => {
        navigate('/');
        alert('Usuário não autorizado');
      });

    const promise2 = axios.get('https://batbank-back.herokuapp.com/balance', {
      headers: { Authorization: `Bearer ${token}` },
    });

    promise2
      .then((res) => {
        setBalance((res.data.balance / 100).toFixed(2));
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
          <Link to="/menu">
            <img src={profileImage} />
          </Link>
          <h2>Olá, {name}</h2>
          <Link to="/help">
            <HelpCircleOutline
              color={'#000000'}
              className="cursorPointer"
              height="40px"
              width="40px"
            />
          </Link>
        </Header>
        <Main>
          <Container>
            <h2>Saldo</h2>
            <Container1>
              <h3>R$ {balance.replace('.', ',')}</h3>
              <Link to="/transactions">
                <ArrowRedoOutline
                  color={'#000000'}
                  className="cursorPointer"
                  height="40px"
                  width="40px"
                  curso="pointer"
                />
              </Link>
            </Container1>
          </Container>
          <Container2>
            <h2>Depositar</h2>
            <Link to="deposit">
              <ArrowRedoOutline
                className="arrowRight"
                color={'#000000'}
                height="40px"
                width="40px"
              />
            </Link>
          </Container2>
          <Container2>
            <h2>Pagar conta</h2>
            <Link to="/pay">
              <ArrowRedoOutline
                className="arrowRight"
                color={'#000000'}
                height="40px"
                width="40px"
              />
            </Link>
          </Container2>
          <Container2>
            <h2>Transferir saldo</h2>
            <Link to="/transfer">
              <ArrowRedoOutline
                className="arrowRight"
                color={'#000000'}
                height="40px"
                width="40px"
              />
            </Link>
          </Container2>
          <Container2>
            <h2>#Maintence</h2>
          </Container2>
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
  justify-content: space-around;
  align-items: center;
  h2 {
    color: #211b18;
    font-family: 'Silkscreen';
    font-size: 20px;
  }
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    z-index: 1;
  }
`;

const Main = styled.div`
  margin-top: 160px;
  height: 75vh;
  width: 100vw;
`;

const Container = styled.div`
  width: 100%;
  height: 130px;
  background-color: #fff500;
  box-shadow: 10px 10px 8px #231e1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 20px;
  h2 {
    font-family: 'Poppins';
    font-size: 25px;
    color: #231e1a;
    margin: 0 15px 10px 15px;
  }
`;

const Container1 = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px 10px 15px;
  h3 {
    font-family: 'Poppins';
    font-size: 30px;
    color: #231e1a;
  }
`;

const Container2 = styled.div`
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
