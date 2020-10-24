import React, { useState, useEffect } from 'react';
import './App.css';
// import Navbar from './Navbar/Navbar';
import NavBar from './Navbar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Login from "./Auth/Login";
import Footer from "./Navbar/Footer";
import Signup from "./Auth/Signup";
import AdminLogin from "./Admin/AdminLogin";
import EventMain from "./Events/EventMain";
import MusicMain from "./Music/MusicMain";
// import MusicDisplay from './Music/MusicDisplay';
import AdminHome from "./Admin/AdminHome";

interface Props {
  
}

export const RouterApp = (props: Props) => {
  const [token, setToken] = useState<string | null>('');
  const [artist, setArtist] = useState('');
    const URL = `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artist}&page_size=50&page=1&s_track_rating=desc&apikey=b4e045669f1de0e2ba866086653af11f`

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

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
      return (!token ? <Login setToken={updateToken} />  : <EventMain token={token} />) 
    }

    const protectedViewsMusic = () => {
      return (!token ? <Login setToken={updateToken} />  : <MusicMain URL={URL} token={token } />) 
    }
  
    const protectedViewsAdmin = () => {
      return (!token ? <AdminLogin setToken={updateToken} />  : <AdminHome token={token} />) 
    }

    const userNavbar = (showSearch: any) =>{
      return (<NavBar token={token}  clickLogout={clearToken} showSearch={showSearch}/>) 
    }
  
    return ( 
        <div>
            
        <Switch>
            <Route exact path="/">
            {userNavbar(false)}
            {protectedViews()}
            </Route>

            <Route exact path="/music">
            {userNavbar(true)}
                {protectedViewsMusic()}
            </Route>

            <Route exact path="/events">
            {userNavbar(false)}
            {protectedViews()}
            </Route>

            <Route exact path="/signup">
            {userNavbar(false)}
              <Signup setToken={setToken} />
            </Route>

            <Route exact path="/login">
            {userNavbar(false)}
              <Login setToken={setToken} />
            </Route>

            <Route exact path="/admin">
            {userNavbar(false)}
            {protectedViewsAdmin()}
              </Route>
        </Switch>
        <Footer/>
        </div>
     );
}

export default RouterApp;
