import styled from 'styled-components';
import { ArrowUndoOutline, HelpCircleOutline } from 'react-ionicons';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import TokenContext from '../context/Token';

export default function RenderPayment() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [token, setToken] = useContext(TokenContext);

  const navigate = useNavigate();

  function pay() {
    const body = {
      amount: Number(amount) * 100,
      description,
      type: '-',
    };

    const promise = axios.post(
      'https://batbank-back.herokuapp.com/transaction',
      body,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    promise
      .then(() => {
        navigate('/home');
      })
      .catch(() => {
        alert('Campos inválidos');
      });
  }

  return (
    <Body>
      <Container>
        <Link to="/home">
          <ArrowUndoOutline
            className="marginLeft"
            color={'#211b18'}
            height="40px"
            width="40px"
          />
        </Link>
        <h2> BAT BANK</h2>
        <Link to="/help">
          <HelpCircleOutline
            className="marginRight"
            color={'#211b18'}
            height="40px"
            width="40px"
          />
        </Link>
      </Container>
      <Main>
        <Input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={pay}>Pagar</Button>
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
  height: 70px;
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
`;

const Input = styled.input`
  margin-bottom: 15px;
  height: 60px;
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
