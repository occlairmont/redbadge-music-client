import React from 'react';
// import Auth from './Auth/Auth';
import EventMain from './Events/EventMain';


function RouterApp() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAyOTU0NDk2LCJleHAiOjE2MDI5OTc2OTZ9.Om9gGBryaSu5Ks59mF4siE5QNVLGEyJd3R6990MZbco" 

    return ( 
        <div>
            {/* <Auth/> */}
            <EventMain token={token}/> 
        </div>
         );
} 

 
export default RouterApp;