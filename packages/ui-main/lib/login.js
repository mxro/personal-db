import axios from 'axios';
import Cookies from 'js-cookie';
export default async function login({ email, password }) {
  // Request API.
  const { status, data } = await axios
    .request({
      url: 'http://localhost:1337/auth/local',
      method: 'post',
      validateStatus: () => true, // accept all reponse
      data: {
        identifier: email,
        password: password,
      }
    });

  if (status !== 200) {
    const { message } = data;
    alert(message[0].messages[0].message);
    return;
  }

  const { user, jwt } = data;
  console.log(user);
  Cookies.set('jwt', jwt);
};