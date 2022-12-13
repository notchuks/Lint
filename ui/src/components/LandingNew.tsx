import React from "react";
import styled from "styled-components";
import { Header, Register } from ".";

import pf from "../images/pf.jpg"
import finance from "../images/finance.png"

const Container = styled.div`
  max-width: 124rem; // from App styling
  margin-right: auto;
  margin-left: auto;
`;

const Main = styled.div`
  display: flex;
  height: 85vh;
  width: 100%;
`;

const Slogan = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
  font-size: 60px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 15px;
`;

const Pic = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: cover;
  height: 400px;
  width: 600px;
`;

const LandingNew = () => {
  const name: String = "Get Started >";
  return (
    <Container>
      <Header />
      <Main>
          <Slogan>
              <Text>Know where your money goes.</Text>
              <Register name={name} />
          </Slogan>
          <Pic>
              <Image src={finance} />
          </Pic>
      </Main>
    </Container>
  );
};

export default LandingNew;
