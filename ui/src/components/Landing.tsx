import React, { useEffect } from 'react';
import Button from 'plaid-threads/Button';
import { useNavigate } from 'react-router-dom';

import { useCurrentUser } from '../services';
import { Login, Banner, AddUserForm } from '.';

import { useBoolean } from '../hooks';

export default function Landing() {
  const { userState, setCurrentUser } = useCurrentUser();
  const [isAdding, hideForm, toggleForm] = useBoolean(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.newUser != null) {
      setCurrentUser(userState.newUser);
    }
  }, [setCurrentUser, userState.newUser]);

  const returnToCurrentUser = () => {
    navigate(`/user/${userState.currentUser.id}`);
  };
  return (
    <div style={{maxWidth: "104.8rem", margin: "0px auto"}}>
      <Banner initialSubheading />
      If you don't have an account, please click "Create Account". Once created,
      you can add as many example Link items as you like.
      <div className="btnsContainer">
        <Login />
        <Button className="btnWithMargin" onClick={toggleForm} centered inline>
          Create Account
        </Button>
        {userState.currentUser.username != null && (
          <Button
            className="btnWithMargin"
            centered
            inline
            onClick={returnToCurrentUser}
          >
            Return to Current User
          </Button>
        )}
      </div>
      {isAdding && <AddUserForm hideForm={hideForm} />}
    </div>
  );
}
