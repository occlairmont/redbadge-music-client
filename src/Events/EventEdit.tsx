import React from "react";
import { UserEvents } from "./EventInterface";
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';


export interface EventEditProps {
    // token: string | null;
    // fetchEvent(): void;
    // updateEvent(): void;
    // updateOff(): void;
}
 
export interface EventEditState {
    
}
 
class EventEdit extends React.Component<EventEditProps, EventEditState> {
    constructor(props: EventEditProps) {
        super(props);
        this.state = { 
            // date: this.props.updateEvent,
            // artist: this.state.artist,
            // location: this.state.location,
            // time: this.state.time,
            // link: this.state.link,
        };
    }

    onSubmit(){
        fetch('http://localhost:3001/events/id', {
        method: "PUT",
        body: JSON.stringify ({
            // date: this.state.date,
            // artist: this.state.artist,
            // location: this.state.location,
            // time: this.state.time,
            // link: this.state.link,
        })
    })
    }
    // handleClickOpen = () => {
    // setOpen(true);
    // };

    // handleClose = () => {
    // setOpen(false);
    // };

    render() { 
        return ( 
        <div>
            edit test
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
       </Button>
       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
         <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
         <DialogContent>
           <DialogContentText>
             To subscribe to this website, please enter your email address here. We will send updates
             occasionally.
           </DialogContentText>
           <TextField */}
             {/* autoFocus
             margin="dense"
             id="name"
             label="Email Address"
             type="email"
             fullWidth
           />
         </DialogContent> */}
         {/* <DialogActions>
           <Button onClick={handleClose} color="primary">
             Cancel
           </Button>
           <Button onClick={handleClose} color="primary">
             Subscribe
           </Button>
         </DialogActions>
       </Dialog> */}

        </div> );
    }
}
 
export default EventEdit;

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We will send updates
//             occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Subscribe
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
