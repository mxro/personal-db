
import React, { useState } from "react";
import Cookies from 'js-cookie';
// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from '../lib/userContext';

import { loginWithToken } from '../lib/login';

import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

import fetch from 'node-fetch';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  const jwtCookie = Cookies.get('jwt');
  if (!user && jwtCookie) {
    loginWithToken({ jwt: jwtCookie }).then((user) => {
      setUser(user);
    });
  }

  let headers = {};
  if (user) {
    headers = {
      Authorization: `Bearer ${jwtCookie}`,
    };
  }

  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    headers,
    fetch,
  });

  return <ApolloProvider client={client} >
    <UserContext.Provider value={[user, setUser]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  </ApolloProvider>
}

export default MyApp;