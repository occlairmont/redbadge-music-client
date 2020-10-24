// import {CardContent} from '@material-ui/core';
// import {Card} from '@material-ui/core';
// import { CardContent } from '@material-ui/core';
import React from 'react';
import MusicDisplay from './MusicDisplay';
import { TrackResponse } from './MusicInterface';



export interface MusicMainProps {
    URL: string;  
    token: string | null;


}
export interface MusicMainState {
    Message: TrackResponse  | undefined;
    search: string;
    artist: string;
}

class MusicMain extends React.Component<MusicMainProps, MusicMainState> {
    constructor(props: MusicMainProps) {
        super(props);
        this.state = {Message : undefined, search: '', artist: '' };
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
          
            {this.state.Message!==undefined ?  < MusicDisplay message={this.state.Message}/> : <></>}

            </div>
         );
    }
}
export default MusicMain;











