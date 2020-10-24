import React from "react";
import {FormGroup, Input, Button} from '@material-ui/core';
import {TrackResponse} from './MusicInterface';
// import MusicDisplay from './MusicDisplay';


export interface MusicCreateProps {
    token: any;
    message : TrackResponse
}
 
export interface MusicCreateState {
    song: string;
    artist: string;
    album: string;
    url: string;
}
 
class MusicCreate extends React.Component<MusicCreateProps, MusicCreateState> {
    constructor(props: MusicCreateProps) {
        super(props);
        this.state = { 
            song: '',
            artist: '',
            album: '',
            url: '',
          };
    }

    onSubmit() {
        fetch("http://localhost:3001/music/create", {
            method: 'Post',
            body: JSON.stringify({
                song: '',
                artist: '',
                album: '',
                url: '',
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: this.props.token !== null ? this.props.token : '',
            }),
        })
        .then((res) => res.json())
        .then((postMessage) => {
            console.log(postMessage);
            this.setState({
                song: '',
                artist: '',
                album: '',
                url: '',
            });
        });
    }

    handleSubmit() {
        this.onSubmit();
    }

    render() { 
        return ( 
            
            <form onSubmit={this.handleSubmit}>
                <h1>Create a Blog Post</h1>
                <FormGroup>
                    <Input onChange={(e) => this.setState({artist: e.target.value})}
                    placeholder='Artist'
                    />
                </FormGroup>
                <FormGroup>
                    <Input onChange={(e) => this.setState({song: e.target.value})}
                    placeholder='Song'
                    />
                </FormGroup>
                <FormGroup>
                    <Input onChange={(e) => this.setState({album: e.target.value})}
                    placeholder='Album'
                    />
                </FormGroup>
                <FormGroup>
                    <Input onChange={(e) => this.setState({url: e.target.value})}
                    placeholder='Upload Picture Here!!'
                    />
                </FormGroup>
                <Button type='submit' variant='outlined'>
                    Share!
                </Button>
            </form>
         );
    }
}
 
export default MusicCreate;