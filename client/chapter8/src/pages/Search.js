import React, { useEffect, useState } from 'react';

import FormGroup from '../components/FormGroup'
import HomeTable from '../components/HomeTable';

import axios from 'axios';
const Search = () => {
  const [players, setPlayers] = useState([]);
  const [username, setUsername] = useState('');
  const [experience, setExperience] = useState('');
  const [level, setLevel] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        setPlayers(res.data.message)
      })

  }, [])



  const updateSearch = () => {
    const params = {
      username: username,
      email: email,
      experience: experience,
      lvl: level,
    };
    axios.get('http://localhost:5000/api/players', {
      params
    })
      .then(res => {
        setPlayers(res.data.message)
      })
  }

  const updateUsername = (e) => {
    setUsername(e);
  }

  const updateEmail = (e) => {
    setEmail(e);
  }

  const updateExperience = (e) => {
    setExperience(e);
  }

  const updateLevel = (e) => {
    setLevel(e);
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Search Pages</h1>
        <div className="row">

        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="form">
                  <div className="row">
                    <div className="col-sm-6">
                      <FormGroup title="Username" doUpdate={updateUsername} />
                      <FormGroup title="Experience" doUpdate={updateExperience} />
                    </div>
                    <div className="col-sm-6">
                      <FormGroup title="Email" doUpdate={updateEmail} />
                      <FormGroup title="Level" doUpdate={updateLevel} />
                    </div>
                    <button className="btn btn-primary" onClick={updateSearch}>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <HomeTable players={players} editable="true" />
          </div>
        </div>
      </div>

    </>
  )
};

export default Search;
