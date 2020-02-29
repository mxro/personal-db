
import React, { useState } from "react";
import Cookies from 'js-cookie';
// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from '../lib/userContext';

import { loginWithToken } from '../lib/login';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  const jwtCookie = Cookies.get('jwt');
  if (!user && jwtCookie) {
    loginWithToken({ jwt: jwtCookie }).then((user) => {
      setUser(user);
    });
  }
  return <UserContext.Provider value={[user, setUser]}><Component {...pageProps} /> </UserContext.Provider>
}

export default MyApp;