import axios from 'axios';
import qs from 'qs';

export const LoginUser = async ( data ) => {
    const url = 'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth'; 
    console.log(data);
    const options = {
        method: 'POST',
        headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs.stringify(data),
    };
    console.log(options);
    const response = await fetch(url, options);
    console.log(response);
}

export default LoginUser;