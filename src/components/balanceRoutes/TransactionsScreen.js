import styled from 'styled-components';
import { ArrowUndoOutline, HelpCircleOutline } from 'react-ionicons';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import TokenContext from '../context/Token';

export default function RenderTransactions() {
  const [token, setToken] = useContext(TokenContext);
  const [balance, setBalance] = useState('');
  const [transactions, setTransactions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      'https://batbank-back.herokuapp.com/transactions',
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    promise
      .then((res) => {
        setBalance((res.data.balance / 100).toFixed(2));
        setTransactions(res.data.transactions.reverse());
      })
      .catch(() => {
        navigate('/home');
        alert('erro ao buscar historico de transações');
      });
  }, []);

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
        <Saldo>
          <h2>Saldo disponível</h2>
          <h3>
            R$
            {balance.replace('.', ',')}
          </h3>
        </Saldo>
        <HistoryBox>
          {transactions.length === 0 ? (
            <Container2>
              <h2>Ainda não existem transações</h2>
            </Container2>
          ) : (
            <>
              <div className="scroll">
                {transactions.map((each) => (
                  <TransactionContainer>
                    <div className="left">
                      <Date>{each.date}</Date>
                      <NameContainer>{each.description}</NameContainer>
                    </div>
                    {each.type === '+' ? (
                      <GreenSpan>
                        R${(each.amount / 100).toFixed(2).replace('.', ',')}
                      </GreenSpan>
                    ) : (
                      <RedSpan>
                        R${(each.amount / 100).toFixed(2).replace('.', ',')}
                      </RedSpan>
                    )}
                  </TransactionContainer>
                ))}
              </div>
            </>
          )}
        </HistoryBox>
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
  margin-top: 100px;
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Saldo = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff500;
  box-shadow: 10px 10px 8px #231e1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 20px;
  h2 {
    font-family: 'Poppins';
    font-size: 16px;
    color: #231e1a;
    margin: 0 15px 10px 15px;
  }
  h3 {
    font-family: 'Poppins';
    font-size: 30px;
    color: #231e1a;
    margin-left: 15px;
  }
`;

const HistoryBox = styled.div`
  width: 100%;
  height: 75%;
  background-color: #f2f2f2;
  .scroll {
    overflow-y: scroll;
    margin-bottom: 25px;
  }
`;

const Container2 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    font-family: 'Poppins';
    font-size: 16px;
    color: #231e1a;
  }
`;

const TransactionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  .left {
    display: flex;
    width: 100%;
  }
`;

const Date = styled.div`
  font-family: 'Poppins';
  font-size: 12px;
  color: #727272;
  margin-left: 10px;
`;

const NameContainer = styled.div`
  font-family: 'Poppins';
  font-size: 14px;
  color: #000000;
  margin-left: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-hyphens: auto;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  hyphens: auto;
  text-overflow: ellipsis;
  width: 70%;
  display: flex;
  align-items: center;
`;

const GreenSpan = styled.span`
  font-family: 'Poppins';
  font-size: 14px;
  text-align: right;
  color: #03ac00;
  margin-right: 10px;
`;

const RedSpan = styled.span`
  font-family: 'Poppins';
  font-size: 14px;
  text-align: right;
  color: #c70000;
  margin-right: 10px;
`;
