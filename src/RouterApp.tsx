import React from 'react';
// import Auth from './Auth/Auth';
import EventMain from './Events/EventMain';


function RouterApp() {
    // const eventsURL = "https://rest.bandsintown.com/artists/BTS/events/?app_id=2bf623f61d6ca560489aa0bcb04be552"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAyMTk0MjMzLCJleHAiOjE2MDIyMzc0MzN9.YGBqjtzjaFaNHHWK_jodSKC09HpWxSoUchKVs3T4VhY"

    return ( 
        <div>
            {/* <Auth/> */}
            <EventMain token={token}/> 
        </div>
         );
}

 
export default RouterApp;