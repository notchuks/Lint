import React, { useEffect, useState } from 'react';
import Modal from 'plaid-threads/Modal';
import ModalBody from 'plaid-threads/ModalBody';
import Button from 'plaid-threads/Button';
import TextInput from 'plaid-threads/TextInput';

import { useUsers, useCurrentUser } from '../services';

interface Props {
  name: any;
}

const Register = (props: Props) => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [show, setShow] = useState(false);

  const { addNewUser, getUsers } = useUsers();
  const { setNewUser } = useCurrentUser();

  const handleSubmit = async () => {
    setShow(false);
    await addNewUser(username);
    setNewUser(username);
  };

  useEffect(() => {
    getUsers(true);
  }, [addNewUser, getUsers]);


  return (
    <div>
        <Button centered inline onClick={() => setShow(!show)}>
          {props.name ? props.name : "Sign Up"}
        </Button>
        <Modal isOpen={show} onRequestClose={() => setShow(false)}>
        <>
          <ModalBody
            onClickCancel={() => setShow(false)}
            header="Sign Up"
            isLoading={false}
            onClickConfirm={handleSubmit}
            confirmText="Sign up"
          >
            <TextInput
              label=""
              id="id-6"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
            />
            <TextInput
              label=""
              id="id-6"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </ModalBody>
        </>
      </Modal>
    </div>
  )
}

export default Register;