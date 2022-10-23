import axios from 'axios';
import qs from 'qs';

export const LoginUser = async ( data ) => {
    console.log(data);
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: { data },
        url: 'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth',
      };
    
    const { crazydata } = await axios(options);
    console.log(crazydata);
}

export default LoginUser;