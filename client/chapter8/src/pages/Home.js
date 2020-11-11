import React, { useEffect, useState } from 'react';
import Cards from '../components/HomeCards';
import HomeTable from '../components/HomeTable';

import axios from 'axios';


const Home = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        setPlayers(res.data.message)
      })

  }, [])

  return (
    <>
      {/* Home Header */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <Cards title="Total Players" qty="10" />
          </div>
          <div className="col-sm-4">
            <Cards title="Highest Experience" qty="18" />
          </div>
          <div className="col-sm-4">
            <Cards title="Highest Level" qty="25" />
          </div>
        </div>
        {/* Home Table */}
        <div className="row">
          <div className="col-sm-12">
            <HomeTable players={players} />
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;
