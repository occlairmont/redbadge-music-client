import React from 'react';
// import Auth from './Auth/Auth';
import EventMain from './Events/EventMain';


function RouterApp() {
    // const eventsURL = "https://rest.bandsintown.com/artists/BTS/events/?app_id=2bf623f61d6ca560489aa0bcb04be552"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAyMzQ5NzIyLCJleHAiOjE2MDIzOTI5MjJ9.LC3vwi6ZwsSbG7EtVUw13Fadnkeh-F09kZ3G6S7bh7U"

    return ( 
        <div>
            {/* <Auth/> */}
            <EventMain token={token}/> 
        </div>
         );
}

 
export default RouterApp;