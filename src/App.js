import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router';
import { ToastContainer } from "react-toastify";
import Home from './components/Home';

import EditContact from './components/EditContact';
 import AddPost from './components/AddContact';
const App= () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      
        <Route exact path="/" component={()=><Home/> } />
        

        <Route  path="/add" component={()=> <AddPost />}/>
       
        <Route  path="/edit/:id" component={()=> <EditContact />}/>

        
    
     
    </div>
  );
}

export default App;
