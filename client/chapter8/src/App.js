import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Search from './pages/Search';
import EditForm from './pages/Edit';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/create' component={Create} />
          <Route path='/edit' component={EditForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
