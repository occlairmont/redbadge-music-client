import React from 'react';
import MusicCards from './MusicCards';
import { TrackList, TrackResponse } from './MusicInterface';
import {Grid} from '@material-ui/core';



export interface MusicDisplayProps {
  message : TrackResponse;
  token : string;
}


function MusicDisplay(props: MusicDisplayProps) {
  
  return (
    <div>
      <Grid container>
          {props.message.message.body.track_list != undefined ? props.message.message.body.track_list.map((trackList: TrackList, index: number) => (
            <MusicCards token={props.token} trackList={trackList} index={index} />
          )): <></>}
          </Grid>
    </div>
  );
}
export default MusicDisplay;