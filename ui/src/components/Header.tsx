import React from "react";
import styled from "styled-components";

import { Login, Register } from ".";
import mint from "../images/mint.png";

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
  font-weight: 600;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  padding: 0px 20px;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={mint} alt="mint" height={"25px"} width={"25px"} />
        Lint
      </Logo>
      <Links>
        <Link>About</Link>
        <Link>Product</Link>
        <Link>Contact</Link>
      </Links>
      <Buttons>
        <Login />
        <Register name={null} />
      </Buttons>
    </Container>
  );
};

export default Header;
