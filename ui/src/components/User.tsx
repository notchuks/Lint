import React from 'react';
import styled from "styled-components";
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import UserIcon from './UserIcon';

const Container = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 30px;
    padding-right: 30px;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`;
const Username = styled.div`
    margin-left: 5px;
    font-weight: 600;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const AContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
`;


const User = ({ username }) => {
  username = username.concat(".");
  const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""
  return (
    <Container>
        <Left>
            Welcome, 
            <Username>{capitalize(username)}</Username>
        </Left>
        <Right>
            <MagnifyingGlassIcon  style={{ height: 20, width: 20, color: "#706e6e" }} />
            <BellIcon  style={{ height: 20, width: 20, marginLeft: 10, color: "#706e6e" }} />
            <AContainer>
                <UserIcon name={username} />
                <ChevronDownIcon style={{ height: 15, width: 15, paddingLeft: 3, color: "#706e6e" }} />
            </AContainer>
        </Right>
    </Container>
  )
}

export default User;