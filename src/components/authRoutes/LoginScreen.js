import styled from 'styled-components';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TokenContext from '../context/Token';

export default function RenderLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useContext(TokenContext);

  const navigate = useNavigate();

  function login() {
    const body = {
      email,
      password,
    };

    const promise = axios.post(
      'https://batbank-back.herokuapp.com/signin',
      body
    );

    promise
      .then((res) => {
        setToken(res.data);
        console.log(token);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Body>
        <Logo>Bat</Logo>
        <Logo>Bank</Logo>
        <Main>
          <Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={login}>Entrar</Button>
          <Link className="textDecorationNone" to="/signup">
            <h4>Primeira vez? Cadastre-se!</h4>
          </Link>
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
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Silkscreen';
  font-size: 60px;
  color: #fff500;
`;

const Main = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  h4 {
    color: #fff500;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-family: 'Poppins';
  }
  .textDecorationNone {
    text-decoration: none;
  }
`;

const Input = styled.input`
  margin-bottom: 15px;
  height: 40px;
  width: 300px;
  border-radius: 5px;
  color: #404040;
  font-size: 20px;
  padding-left: 14px;
  font-family: 'Poppins';
  border: 1px solid #d0d0d0;
  ::placeholder {
    color: #404040;
    opacity: 0.75;
  }
`;

const Button = styled.div`
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
`;
