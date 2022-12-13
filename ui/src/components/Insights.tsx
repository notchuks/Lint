import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useMemo } from "react";
import styled from "styled-components";

import { Barchart, NTable, TTable, User } from ".";
import { formatDate, formatDateN } from "../util";
import { SelectColumnFilter } from "./TTable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1151px;
  height: 100%;
  overflow-y: hidden;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100px;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 1px solid gray;
`;
const H2 = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
`;
const P = styled.div``;

const Main = styled.div`
  height: 550px;
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 751px;
`;

const FinanceContainer = styled.div`
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
`;

const Finance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  width: 170px;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  padding: 5px 25px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
  // border-radius: 100%;
  margin-right: 10px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Middle = styled.div`
  font-weight: 700;
  font-size: 25px;
  margin-top: 15px;
`;

const Bottom = styled.div`
  margin-top: 10px;
`;

const Percent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  width: 47px;
  border-radius: 10px;
  background-color: ${props => props.color === "green" ? "#cbfaf2" : "#fcebe9"};// #fcebe9; // #cbfaf2
`;

const Ptext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: ${props => props.color === "green" ? "#0cb43f" : "#ee270d"}; //#ee270d; // #0cb43f
  font-weight: 700;
`;

const BarContainer = styled.div`
  display: flex;
  width: 650px;
  height: 60%;
  // border: 1px solid #707070;
  // border-radius: 10px;
  font-size: 14px;
  position: relative;
  // padding-top: 15px;
`;

const Txt = styled.div`
  position: absolute;
  z-index: 10;
  margin-left: 30px;
  margin-top: 5px;
  font-weight: 800;
  font-size: 17px;
`;

const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-left: 1px solid gray;
`;

const getData = () => [
  {
    "name": "Touchstone Climbing",
    "type": "place",
    "date": "2022-09-29T23:00:00.000Z",
    "category": "Recreation",
    "amount": 78.5,
  },
  {
    "name": "United Airlines",
    "type": "special",
    "date": "2022-09-29T23:00:00.000Z",
    "category": "Travel",
    "amount": -500,
  },
  {
    "name": "Starbucks",
    "type": "place",
    "date": "2022-09-28T23:00:00.000Z",
    "category": "Food and Drink",
    "amount": 4.33,
  },
  {
    "name": "McDonald's",
    "type": "place",
    "date": "2022-09-28T23:00:00.000Z",
    "category": "Food and Drink",
    "amount": 12,
  },
  {
    "name": "SparkFun",
    "type": "place",
    "date": "2022-09-27T23:00:00.000Z",
    "category": "Food and Drink",
    "amount": 89.4,
  },
  {
    "name": "INTRST PYMNT",
    "type": "special",
    "date": "2022-09-26T23:00:00.000Z",
    "category": "Transfer",
    "amount": -4.22,
  },
];


const Insights = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Transaction",
        accessor: "name",
      },
      {
        Header: "Category",
        accessor: "category",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  data.forEach(transaction => {
    transaction.date = formatDateN(transaction.date);
  });

  console.log(data);

  const username = "nnamdi"

  return (
    <div>
      <Container>
        <User username={username} />
        <Overview>
          <H2>Overview</H2>
          <P>Here's what's happening in your finances.</P>
        </Overview>
        <Main>
          <Left>
            <FinanceContainer>
              <Finance>
                <Top>
                  <Icon>
                    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <circle id="myCircle" cx="0" cy="0" r="5" />
                      </defs>
                      <use x="5" y="5" href="#myCircle" fill="#92c1ec" />
                    </svg>
                  </Icon>
                  <Text>Income</Text>
                </Top>
                <Middle>&#8358;235,572</Middle>
                <Bottom>
                  <Percent color={"green"}>
                    <Ptext color={"green"}>
                      15%
                      <ChevronDownIcon  style={{ height: 15, width: 15 }} />
                    </Ptext>
                  </Percent>
                </Bottom>
              </Finance>
              <Finance>
                <Top>
                  <Icon>
                    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <circle id="myCircle" cx="0" cy="0" r="5" />
                        <pattern id="pattern_m9Ijq" patternUnits="userSpaceOnUse" width="1.5" height="1.5" patternTransform="rotate(45)">
                          <line x1="0" y="0" x2="0" y2="1.5" stroke="#000000" stroke-width="1" />
                        </pattern>
                      </defs>
                      <use x="5" y="5" href="#myCircle" fill="url('#pattern_m9Ijq')" />
                    </svg>
                  </Icon>
                  <Text>Expenses</Text>
                </Top>
                <Middle>&#8358;183,241</Middle>
                <Bottom>
                  <Percent color={"red"}>
                    <Ptext color={"red"}>
                      5%
                      <ChevronDownIcon  style={{ height: 15, width: 15 }} />
                    </Ptext>
                    
                  </Percent>
                </Bottom>
              </Finance>
              <Finance>
                <Top>
                  <Icon>
                    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <circle id="myCircle" cx="0" cy="0" r="5" />
                      </defs>
                      <use x="5" y="5" href="#myCircle" fill="#1d1b1b" />
                    </svg>
                  </Icon>
                  <Text>Net Worth</Text>
                </Top>
                <Middle>&#8358;52,221</Middle>
                <Bottom>
                  <Percent color={"green"}>
                    <Ptext color={"green"}>
                      10%
                      <ChevronDownIcon  style={{ height: 15, width: 15 }} />
                    </Ptext>
                  </Percent>
                </Bottom>
              </Finance>
            </FinanceContainer>
            <BarContainer>
              <Txt>Money Statistics</Txt>
              <Barchart />
            </BarContainer>
          </Left>
          <Right>
            <TableContainer>
              <NTable transactions={data} />
            </TableContainer>
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Insights;
