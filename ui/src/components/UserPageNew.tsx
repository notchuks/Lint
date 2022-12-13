import React, { useEffect, useState, useMemo } from 'react';
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom'; // switched RouteComponentProps to useParams
import sortBy from 'lodash/sortBy';
import NavigationLink from 'plaid-threads/NavigationLink';
import LoadingSpinner from 'plaid-threads/LoadingSpinner';
import Callout from 'plaid-threads/Callout';
import Button from 'plaid-threads/Button';

import { RouteInfo, ItemType, AccountType, AssetType } from './types'; // don't need RouteInfo interface anymore
import {
  useItems,
  useAccounts,
  useTransactions,
  useUsers,
  useAssets,
  useLink,
} from '../services';

import { pluralize } from '../util';

import {
  Banner,
  LaunchLink,
  SpendingInsights,
  NetWorth,
  ItemCard,
  UserCard,
  LoadingCallout,
  ErrorMessage,
} from '.';

import { SideBar, Insights, AddBank } from ".";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1366px;
  height: 100vh;
  // overflow: hidden;
`;

const ButtonContainer = styled.div`
  width: 1151px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserPageNew = () => {
  const [user, setUser] = useState({
    id: 0,
    username: '',
    created_at: '',
    updated_at: '',
  });

  const [items, setItems] = useState<ItemType[]>([]);
  const [token, setToken] = useState('');
  const [numOfItems, setNumOfItems] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [assets, setAssets] = useState<AssetType[]>([]);

  const { getTransactionsByUser, transactionsByUser } = useTransactions();
  const { getAccountsByUser, accountsByUser } = useAccounts();
  const { assetsByUser, getAssetsByUser } = useAssets();
  const { usersById, getUserById } = useUsers();
  const { itemsByUser, getItemsByUser } = useItems();
  const { userId }: { userId: number } = useParams<keyof RouteInfo>() as RouteInfo;
  // after destructuring userId, change type to num
  //const userNId = Number(userId);
  const { generateLinkToken, linkTokens } = useLink();

  const initiateLink = async () => {
    // only generate a link token upon a click from enduser to add a bank;
    // if done earlier, it may expire before enduser actually activates Link to add a bank.
    await generateLinkToken(userId, null);
  };

  // update data store with user
  useEffect(() => {
    getUserById(userId, false);
  }, [getUserById, userId]);

  // set state user from data store
  useEffect(() => {
    setUser(usersById[userId] || {});
  }, [usersById, userId]);

  useEffect(() => {
    // This gets transactions from the database only.
    // Note that calls to Plaid's transactions/get endpoint are only made in response
    // to receipt of a transactions webhook.
    getTransactionsByUser(userId);
  }, [getTransactionsByUser, userId]);

  useEffect(() => {
    setTransactions(transactionsByUser[userId] || []);
  }, [transactionsByUser, userId]);

  // update data store with the user's assets
  useEffect(() => {
    getAssetsByUser(userId);
  }, [getAssetsByUser, userId]);

  useEffect(() => {
    setAssets(assetsByUser.assets || []);
  }, [assetsByUser, userId]);

  // update data store with the user's items
  useEffect(() => {
    if (userId != null) {
      getItemsByUser(userId, true);
    }
  }, [getItemsByUser, userId]);

  // update state items from data store
  useEffect(() => {
    const newItems: Array<ItemType> = itemsByUser[userId] || [];
    const orderedItems = sortBy(
      newItems,
      item => new Date(item.updated_at)
    ).reverse();
    setItems(orderedItems);
  }, [itemsByUser, userId]);

  // update no of items from data store
  useEffect(() => {
    if (itemsByUser[userId] != null) {
      setNumOfItems(itemsByUser[userId].length);
    } else {
      setNumOfItems(0);
    }
  }, [itemsByUser, userId]);

  // update data store with the user's accounts
  useEffect(() => {
    getAccountsByUser(userId);
  }, [getAccountsByUser, userId]);

  useEffect(() => {
    setAccounts(accountsByUser[userId] || []);
  }, [accountsByUser, userId]);

  useEffect(() => {
    setToken(linkTokens.byUser[userId]);
  }, [linkTokens, userId, numOfItems]);
  
  const deets = true;
  console.log(transactions);
  console.log(userId);

  const byMonthsData = () => [
    {
      name: "Jan",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Feb",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Mar",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Apr",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "May",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Jun",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Jul",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Aug",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Sep",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Oct",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Nov",
      expenses: 0,
      income: 0,
      net: 0,
    },
    {
      name: "Dec",
      expenses: 0,
      income: 0,
      net: 0,
    }
  ];

  const monthsData = useMemo(() => byMonthsData(), [])

  const monthlyTransactions = useMemo(
    () => transactions.map((tx) => {
      const date = new Date(tx['date']);
      if (date.getFullYear() === 2022) {
        switch (new Date(tx['date']).getMonth()) {
          case 0:
            monthsData[0].expenses += tx['amount'];
            break;
        
          case 1:
            monthsData[1].expenses += tx['amount'];
            break;
        
          case 2:
            monthsData[2].expenses += tx['amount'];
            break;
        
          case 3:
            monthsData[3].expenses += tx['amount'];
            break;
        
          case 4:
            monthsData[4].expenses += tx['amount'];
            break;
        
          case 5:
            monthsData[5].expenses += tx['amount'];
            break;
        
          case 6:
            monthsData[6].expenses += tx['amount'];
            break;
        
          case 7:
            monthsData[7].expenses += tx['amount'];
            break;
        
          case 8:
            monthsData[8].expenses += tx['amount'];
            break;
        
          case 9:
            monthsData[9].expenses += tx['amount'];
            break;
        
          case 10:
            monthsData[10].expenses += tx['amount'];
            break;
        
          case 11:
            monthsData[11].expenses += tx['amount'];
            break;
        
          default:
            break;
        }
      }
    }), [transactions]
  );

  console.log(monthsData);

  return (
    <Container>
      <SideBar />
      {deets ? <Insights /> : <ButtonContainer><Button large inline className="add-account__button" onClick={initiateLink}>Add a bank</Button></ButtonContainer> }
      {token != null && token.length > 0 && (
        // Link will not render unless there is a link token
        <LaunchLink token={token} userId={userId} itemId={null} />
      )}
    </Container>
  )
}

export default UserPageNew;