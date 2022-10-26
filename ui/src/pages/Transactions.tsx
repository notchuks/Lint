import React, { useMemo } from "react";
import styled from "styled-components";

import { formatDateN } from "../util";
import { SelectColumnFilter } from "../components/TTable";
import { TTable, SideBar } from "../components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1366px;
  height: 100vh;
`;

const TContainer = styled.div`
  width: 1151px;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
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

const getData = () => [
  {
    name: "Touchstone Climbing",
    type: "place",
    date: "2022-09-29T23:00:00.000Z",
    category: "Recreation",
    amount: 78.5,
  },
  {
    name: "United Airlines",
    type: "special",
    date: "2022-09-29T23:00:00.000Z",
    category: "Travel",
    amount: -500,
  },
  {
    name: "Starbucks",
    type: "place",
    date: "2022-09-28T23:00:00.000Z",
    category: "Food and Drink",
    amount: 4.33,
  },
  {
    name: "McDonald's",
    type: "place",
    date: "2022-09-28T23:00:00.000Z",
    category: "Food and Drink",
    amount: 12,
  },
  {
    name: "SparkFun",
    type: "place",
    date: "2022-09-27T23:00:00.000Z",
    category: "Food and Drink",
    amount: 89.4,
  },
  {
    name: "INTRST PYMNT",
    type: "special",
    date: "2022-09-26T23:00:00.000Z",
    category: "Transfer",
    amount: -4.22,
  },
  {
    name: "Touchstone Climbing",
    type: "place",
    date: "2022-09-29T23:00:00.000Z",
    category: "Recreation",
    amount: 78.5,
  },
  {
    name: "United Airlines",
    type: "special",
    date: "2022-09-29T23:00:00.000Z",
    category: "Travel",
    amount: -500,
  },
  {
    name: "Starbucks",
    type: "place",
    date: "2022-09-28T23:00:00.000Z",
    category: "Food and Drink",
    amount: 4.33,
  },
  {
    name: "McDonald's",
    type: "place",
    date: "2022-09-28T23:00:00.000Z",
    category: "Food and Drink",
    amount: 12,
  },
  {
    name: "SparkFun",
    type: "place",
    date: "2022-09-27T23:00:00.000Z",
    category: "Food and Drink",
    amount: 89.4,
  },
  {
    name: "INTRST PYMNT",
    type: "special",
    date: "2022-09-26T23:00:00.000Z",
    category: "Transfer",
    amount: -4.22,
  },
  {
    name: "Starbucks",
    type: "place",
    date: "2022-09-28T23:00:00.000Z",
    category: "Food and Drink",
    amount: 4.33,
  },
  {
    name: "McDonald's",
    type: "place",
    date: "2022-09-28T23:00:00.000Z",
    category: "Food and Drink",
    amount: 12,
  },
  {
    name: "SparkFun",
    type: "place",
    date: "2022-09-27T23:00:00.000Z",
    category: "Food and Drink",
    amount: 89.4,
  },
  {
    name: "INTRST PYMNT",
    type: "special",
    date: "2022-09-26T23:00:00.000Z",
    category: "Transfer",
    amount: -4.22,
  },
];

const Transactions = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "",
        accessor: "icon",
        Cell: () => (
        <IconContainer>
          <MagnifyingGlassIcon style={{ height: 15, width: 15 }} />
        </IconContainer>
        ),
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

  data.forEach((transaction) => {
    transaction.date = formatDateN(transaction.date);
  });

  console.log(data);
  return (
    <Container>
      <SideBar />
      <TContainer>
        <TTable  columns={columns} data={data} size={10} />
      </TContainer>
    </Container>
  );
};

export default Transactions;
