import { Logout } from 'plaid-threads';
import React from 'react';
import styled from "styled-components";

import vercel from "../images/vercel.svg";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 215px;
  padding: 20px 0px;
  background-color: #1d1b1b;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: top;
  padding-left: 23px;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  margin-top: -100px;
`;

const NavContainer = styled.div`
  height: 30px;
  border-left: 3px solid white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

//const Logout = styled.div``;
const Lcontainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 23px; // extra 3px for border-left
`;

const SideBar = () => {
  return (
    <Container>
        <Logo>
            <Logout />Lint
            {/* <svg path={vercel} ></svg> */}
        </Logo>

        <Navbar>
            <NavContainer>
                <Nav>
                    <Logout/>
                    Dashboard
                </Nav>
            </NavContainer>
            <NavContainer>
                <Nav>
                    <Logout/>
                    Transactions
                </Nav>
            </NavContainer>
            <NavContainer>
                <Nav>
                    <Logout/>
                    Accounts
                </Nav>
            </NavContainer>
            <NavContainer>
                <Nav>
                    <Logout/>
                    Profile
                </Nav>
            </NavContainer>
        </Navbar>
        
        <Lcontainer>
            <Logout />Log Out
        </Lcontainer>
    </Container>
  )
}

export default SideBar;