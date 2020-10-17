import React, { useState, useEffect } from 'react';
import './App.css';
import EventsMain from "./Events/EventMain";
import MusicMain from "./Music/MusicMain";
import Navbar from './Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import Login from "./Auth/Login";
import Footer from "./Navbar/Footer";
import Signup from "./Auth/Signup";
import Home from "./Auth/Home";
// import MusicDisplay from "./Music/MusicDisplay";
// import EventDisplay from "./Events/EventDisplay";
import "./App.css";


interface Props {
  
}

export const RouterApp = (props: Props) => {
  const [token, setToken] = useState<string | null>('');

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  console.log(token);

  const updateToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const clearToken = () => {
    // localStorage.removeItem("token");
    localStorage.clear();
    setToken("");
  };

      const protectedViews = () => {
        console.log(token);
      return (!token ? <Login setToken={updateToken}  />  : <Home token={token }/>) 
    }
  
    const userNavbar = () =>{
      return (<Navbar token={token}  clickLogout={clearToken}/>) 
    }
  
    return ( 
        <div>
            {userNavbar()}
        <Switch>
            <Route exact path="/">
            {protectedViews()}
            </Route>
            <Route exact path="/music">
                
                {protectedViews()}
            </Route>
            <Route exact path="/events">

            {protectedViews()}
            </Route>
            <Route exact path="/signup">
              <Signup setToken={setToken} />
            </Route>
            <Route exact path="/login">
              <Login setToken={setToken} />
            </Route>
            <Route exact path="/admin">

              </Route>
        </Switch>
        <Footer/>
        </div>
     );
}

export default RouterApp;