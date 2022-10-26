import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const Object = styled.div`
    height: 35px;
    width: 35px;
    background-color: black;
    border-radius: 50%;
`;
const Text = styled.div`
    color: white;
    position: absolute;
    z-index: 10;
    font-size: 14px;
`;

const UserIcon = ({ name }) => {
  const str = name.slice(0,2).toUpperCase();
  return (
    <Container>
        <Object></Object>
        <Text>{str}</Text>
    </Container>
  )
}

export default UserIcon;