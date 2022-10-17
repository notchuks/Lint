import React from 'react'
import styled from "styled-components";

import { SideBar, Insights } from ".";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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