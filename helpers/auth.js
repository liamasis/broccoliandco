import qs from 'qs';

export const LoginUser = async ( data ) => {
    const url = 'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth'; 
    
    const options = {
        method: 'POST',
        headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs.stringify(data),
    };
    
    const response = await fetch(url, options).then(
        res => {
            switch(res.status) {
                case 200:
                    //Status Ok!
                    alert('Your email address has been added to our mailing list')
                    break;
                case 400:
                    //Status Fail
                    alert('Error, your email has not been added to our list')                    
                    break;
        }
    }
    );
   
}

export default LoginUser;