import LoginUser from '../helpers/auth'
import React from 'react';
import { useState } from 'react';

function Form() {

 /*  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
   */

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
    }

    
    console.log(data);
    LoginUser( data );
  }


     return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" defaultValue="test"/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          defaultValue="test@hot"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Confirm Email address</label>
        <input
          type="email"
          className="form-control"
          id="confirmemail"
          placeholder="name@example.com"
          defaultValue="test@hot"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
  
};
export default Form;
