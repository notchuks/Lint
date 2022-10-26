import React from 'react';
import styled from "styled-components";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 350px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #a3a2a2;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

const Filter = styled.div`
    border: 1px solid #a3a2a2;
    border-radius: 5px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

const Transaction = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid #a3a2a2;
`;

const Left = styled.div`
    display: flex;
`;

const IconContainer = styled.div`
    height: 35px;
    width: 35px;
    background-color: #d9e5f0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 5px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const Name = styled.div`
    font-weight: 600;
`;

const Category = styled.div`
    font-size: 13px;
    color: gray;
`;

const Right = styled.div`
`;

const Price = styled.div`
    font-weight: 600;
`;


const NTable = ({ transactions }) => {
  return (
    <Container>
        <TitleContainer>
            <Title>Recent Transactions</Title>
            <Filter>Filter</Filter>
        </TitleContainer>
        <Body>
            {transactions.map((transaction) => {
                return (
                <Transaction>
                    <Left>
                        <IconContainer>
                            <MagnifyingGlassIcon style={{ height: 15, width: 15 }} />
                        </IconContainer>
                        <Main>
                            <Name>{transaction.name}</Name>
                            <Category>{transaction.category}</Category>
                        </Main>
                    </Left>
                    <Right>
                        <Price>${transaction.amount}</Price>
                    </Right>
                </Transaction>
                );
            })}
        </Body>
    </Container>
  )
}

export default NTable;