import React from 'react';
import MusicCards from './MusicCards';
import { TrackList, TrackResponse } from './MusicInterface';
import {Grid} from '@material-ui/core';
import MusicTable from './MusicTable';

export interface MusicDisplayProps {
  message : TrackResponse;
  token : string;
  trackList : TrackList;
}
function MusicDisplay(props: MusicDisplayProps) {
  return (
    <div>
      <Grid container>
          <Grid item xs={6}>
          {props.message.message.body.track_list != undefined ? props.message.message.body.track_list.map((trackList: TrackList, index: number) => (
            <MusicCards token={props.token} trackList={trackList} index={index} />
          )): <></>}
          </Grid>
          <Grid item md={4}>
            {/* <MusicTable trackList={props.trackList} token={props.token}  /> */}
          </Grid>
          </Grid>
    </div>
  );
}
export default MusicDisplay;