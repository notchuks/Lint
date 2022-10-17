import React from 'react';
import { Route, Routes, useNavigate, useParams, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { UserPage, Landing, Sockets, OAuthLink, UserList, LandingNew, UserPageNew } from './components';
import { AccountsProvider } from './services/accounts';
import { InstitutionsProvider } from './services/institutions';
import { ItemsProvider } from './services/items';
import { LinkProvider } from './services/link';
import { TransactionsProvider } from './services/transactions';
import { UsersProvider } from './services/users';
import { CurrentUserProvider } from './services/currentUser';
import { AssetsProvider } from './services/assets';
import { ErrorsProvider } from './services/errors';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <ToastContainer autoClose={8000} draggable={false} toastClassName={'box toast__background'} bodyClassName={'toast__body'} hideProgressBar={true} />
      <InstitutionsProvider>
        <ItemsProvider>
          <LinkProvider>
            <AccountsProvider>
              <TransactionsProvider>
                <ErrorsProvider>
                  <UsersProvider>
                    <CurrentUserProvider>
                      <AssetsProvider>
                        <Sockets />
                        <Routes>
                          <Route path="/" element={<Landing />} />
                          <Route path="/landing" element={<LandingNew />} />
                          <Route path="/user/:userId" element={<UserPage />} />
                          <Route path="/oauth-link" element={<OAuthLink />} />
                          <Route path="/admin" element={<UserList />} />
                          <Route path="/usern" element={<UserPageNew />} />
                        </Routes>
                      </AssetsProvider>
                    </CurrentUserProvider>
                  </UsersProvider>
                </ErrorsProvider>
              </TransactionsProvider>
            </AccountsProvider>
          </LinkProvider>
        </ItemsProvider>
      </InstitutionsProvider>
    </div>
  );
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(App);
