import React, { useState } from 'react';
import axios from 'axios';

import FormGroup from '../components/FormGroup';

const Create = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const createUser = () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    axios.post('http://localhost:5000/api/players', {
      data
    }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {

      })
  }

  const updateUsername = (e) => {
    setUsername(e);
    console.log(e);
  }

  const updateEmail = (e) => {
    setEmail(e);
  }

  const updatePassword = (e) => {
    setPassword(e);
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Create Player</h1>
        <div className="card">
          <div className="card-body">
            <div className="form">
              <div className="row">
                <div className="col-sm-6">
                  <FormGroup title="Username" doUpdate={updateUsername} />
                  <FormGroup title="Password" doUpdate={updatePassword} />
                  <div className="form-group">
                    <button className="btn btn-primary" onClick={createUser}>Submit</button>
                  </div>
                </div>
                <div className="col-sm-6">
                  <FormGroup title="Email" doUpdate={updateEmail} />
                  <FormGroup title="Confirm Password" doUpdate={updatePassword} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Create;  