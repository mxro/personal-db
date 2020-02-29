import axios from 'axios';
import Cookies from 'js-cookie';

export default async function login({ email, password }) {

  // Request API.
  const { status, data } = await axios
    .request({
      url: 'http://localhost:1337/auth/local',
      method: 'post',
      validateStatus: () => true, // accept all reponse codes
      data: {
        identifier: email,
        password: password,
      }
    });

  if (status !== 200) {
    const { message } = data;
    alert(message[0].messages[0].message);
    return undefined;
  }

  const { user, jwt } = data;
  Cookies.set('jwt', jwt);
  return user;
};