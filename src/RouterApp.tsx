import React, { useState } from 'react';
import MusicMain from './Music/MusicMain'


function RouterApp() {
  const [artist, setArtist] = useState('');
  const URL = `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artist}&page_size=20&page=1&s_track_rating=desc&apikey=b4e045669f1de0e2ba866086653af11f`

 


  
  
    return (
      <div>
          <MusicMain URL={URL} />
      </div>
    );
  }
  
  export default RouterApp;
  