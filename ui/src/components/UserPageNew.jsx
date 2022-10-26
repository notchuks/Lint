import React from 'react'
import styled from "styled-components";

import { SideBar, Insights } from ".";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1366px;
  height: 100vh;
  // overflow: hidden;
`;

const UserPageNew = () => {
  return (
    <Container>
        <SideBar />
        <Insights />
    </Container>
  )
}

export default UserPageNew;