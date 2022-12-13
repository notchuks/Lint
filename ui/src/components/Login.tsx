import React, { useState } from 'react';
import Modal from 'plaid-threads/Modal';
import ModalBody from 'plaid-threads/ModalBody';
// import Button from 'plaid-threads/Button'; // not in use anymore
import TextInput from 'plaid-threads/TextInput';
import styled from "styled-components";

import { useCurrentUser } from '../services';

const Button = styled.button`
  background: none;
  border: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: #0076d6;
  }
`;

const Login = () => {
  const { login } = useCurrentUser();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    setShow(false);
    login(value);
  };

  return (
    <div>
      <Button style={{}} onClick={() => setShow(!show)}>
        Login
      </Button>
      <Modal isOpen={show} onRequestClose={() => setShow(false)}>
        <>
          <ModalBody
            onClickCancel={() => setShow(false)}
            header="User Login"
            isLoading={false}
            onClickConfirm={handleSubmit}
            confirmText="Submit"
          >
            <TextInput
              label=""
              id="id-6"
              placeholder="Enter User Name"
              value={value}
              onChange={e => setValue(e.currentTarget.value)}
            />
            <TextInput
              label=""
              id="id-6"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </ModalBody>
        </>
      </Modal>
    </div>
  );
};

export default Login;
