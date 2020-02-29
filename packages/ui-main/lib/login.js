import axios from 'axios';
import Cookies from 'js-cookie';

export async function login({ email, password }) {

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

export async function loginWithToken({ jwt }) {

  const { status, data } = await axios
    .request({
      url: 'http://localhost:1337/users/me',
      method: 'get',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      validateStatus: () => true, // accept all reponse codes
    });

  if (status !== 200) {
    const { message } = data;
    console.log('Invalid token');
    console.log(message);
    Cookies.set('jwt', '');
    return undefined;
  }

  return data;
}