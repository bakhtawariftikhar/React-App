
import React from 'react';

import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import AboutUs from './components/AboutUs'

import Header from './components/header';
import Footer from './components/footer';
import RegistrationForm from './components/Register';

import Login from './components/login';


function App() {
  return (
    <>
     <div className="App">
      <Header/>
    <Router>
       
<Switch>
        
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/login' component={Login} />
        <Route path='/Register' component={RegistrationForm} />
       
        </Switch>
    
      </Router>
      <Footer />
    </div>
    </>
  );
 }

    export default App;
