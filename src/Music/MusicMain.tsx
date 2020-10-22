import React from 'react';
import MusicDisplay from './MusicDisplay';
import { TrackResponse } from './MusicInterface';

export interface MusicMainProps {
    URL: string;
    token: string | null;
}
export interface MusicMainState {
    Message: TrackResponse  | undefined;
}
class MusicMain extends React.Component<MusicMainProps, MusicMainState> {
    constructor(props: MusicMainProps) {
        super(props);
        this.state = {Message : undefined };
    }
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/'+this.props.URL)
        .then((res) => res.json())
        .then((json:TrackResponse) => {
            console.log(json)
            this.setState({Message:json})
        })
    }
    render() { 
        return ( 
            <div>
            {/* <Card>
                <CardContent>
                    <h1>Search for Artist</h1>
                  {/* {this.state.Message?.message.body.track_list.map(
                      (Track,index: number) => {
                          return(
                      <><p key={index}>{Track.track.artist_name}</p>
                      <p>{Track.track.track_edit_url}</p></>
                          )
                      }
                  )} */}
                {/* </CardContent>
            </Card> */} 
            {this.state.Message!==undefined ?  < MusicDisplay message={this.state.Message} /> : <></>}
            </div>
         );
    }
}
export default MusicMain;











