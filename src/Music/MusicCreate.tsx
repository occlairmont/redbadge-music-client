import React from "react";
// import {FormGroup, Input, Button} from '@material-ui/core';
// // import {TrackResponse} from './MusicInterface';
// // import MusicDisplay from './MusicDisplay';
// import { TrackResponse } from "./MusicInterface";


// export interface MusicCreateProps {
//     token: string | null;
//     fetchMusic() : void;
//     message : TrackResponse
// }
 
// export interface MusicCreateState {
//     song: string;
//     artist: string;
//     album: string;
//     text: string;
//     rating: number;
// }
 
// class MusicCreate extends React.Component<MusicCreateProps, MusicCreateState> {
//     constructor(props: MusicCreateProps) {
//         super(props);
//         this.state = { 
//             song: '',
//             artist: '',
//             album: '',
//             text: '',
//             rating: 0
//           };
//     }

//     onSubmit() {
//         fetch("http://localhost:3001/music/create", {
//             method: 'Post',
//             body: JSON.stringify({
//                 song: this.state.song,
//                 artist: this.state.artist,
//                 album: this.state.album,
//                 text: this.state.text,
//                 rating: this.state.rating,
//             }),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 Authorization: this.props.token !== null ? this.props.token : '',
//             }),
//         })
//         .then((res) => res.json())
//         .then((postMessage) => {
//             console.log(postMessage);
//             this.setState({
//                 song: this.state.song,
//                 artist: this.state.artist,
//                 album: this.state.album,
//                 text: this.state.text,
//                 rating: this.state.rating,
//             });
//             this.props.fetchMusic(); 
//         });
//     }

//     handleSubmit() {
//         this.onSubmit();
//     }

//     render() { 
//         return ( 
//             <form onSubmit={this.handleSubmit}>
//                 <h1>Write a Review</h1>
//                 <FormGroup>
//                     <Input onChange={(e) => this.setState({artist: e.target.value})}
//                     placeholder='Artist'
//                     value={this.state.artist}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Input onChange={(e) => this.setState({song: e.target.value})}
//                     placeholder='Song'
//                     value={this.state.song}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Input onChange={(e) => this.setState({album: e.target.value})}
//                     placeholder='Album'
//                     value={this.state.album}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Input onChange={(e) => this.setState({text: e.target.value})}
//                     placeholder='Write your Review Here'
//                     value={this.state.text}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Input onChange={this.handleSubmit}
//                     type='number'
//                     placeholder='Rating'
//                     value={this.state.rating}
//                     />
//                 </FormGroup>
//                 <Button type='submit' variant='outlined'>
//                     Share!
//                 </Button>
//             </form>
//          );
//     }
// }
 
// export default MusicCreate;