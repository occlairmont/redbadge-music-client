import React from 'react';
import { UserEvents } from "./AdminInterface";
import APIURL from '../helpers/environment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Email } from '@material-ui/icons';

export interface AdminHomeProps {
    token: string;
  }
  
  export interface AdminHomeState {
    eventData: any | undefined;
    eventUpdate: UserEvents | undefined;
    updateActive: boolean;
  }

  const headers = ['Artist', 'Location', 'Date', 'Time', 'ID', 'Email']

class AdminHome extends React.Component<AdminHomeProps, AdminHomeState> {
    constructor(props: AdminHomeProps) {
      super(props);
      this.state = { eventData: [],
        eventUpdate: undefined,
        updateActive: false,  };
    }

getInfo = () => {

  fetch(`${APIURL}/admin/eventinfo`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: this.props.token,
    }),
  })
    .then((res) => res.json())
    .then((json: AdminResponseObject) => {
      this.setState({ eventData: json });
      console.log(json);

    })
}
  
componentDidMount = () => {
  this.getInfo()
}

formatDate = (dateTime: any) => {
  let date = new Date(dateTime)
  return date.toLocaleString().split(",")[0]
}

render() {
    return (
<div>
<h1 style={{display: 'flex', justifyContent: 'center', marginBottom: '2em'}}>Successful login in to the Admin portal!</h1>
<hr />
<h2 style={{display: 'flex', justifyContent: 'center'}}>All user events</h2>
<hr />

<TableContainer>
      <Table aria-label="simple table"style={{backgroundColor: 'lightslategrey', border: '5px solid black', alignItems: 'center'}}>
        <TableHead >
          <TableRow>
    {headers.map(header =>  <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'monospace', fontSize: '30px'}}>{header}</TableCell>)}
           
          </TableRow>
          </TableHead>

        <TableBody>
        {this.state.eventData.map((events: AdminResponseObject, index: any) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" style={{color: 'white', fontFamily: 'monospace', fontSize: '25px'}}>
                {events.artist}
              </TableCell>

              <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'cursive', fontSize: '25px'}}>
            {events.location}
              </TableCell>

              <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'cursive', fontSize: '25px'}}>
            {this.formatDate(events.date)}
              </TableCell>

              <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'cursive', fontSize: '25px'}}>
            {events.time}
              </TableCell>

              <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'cursive', fontSize: '25px'}}>
            {events.owner}
              </TableCell>

              <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'cursive', fontSize: '25px'}}>
            {events.email}
              </TableCell>

              {/* <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'cursive', fontSize: '25px'}}>
            {events.hasAttended}
              </TableCell> */}

            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>

</div>

    )}}

    export default AdminHome;

    export interface AdminResponseObject {
      id: number;
      date: Date;
      artist: string;
      location: string;
      time: string;
      link: string;
      hasAttended: boolean;
      owner: number;
      createdAt: Date;
      updatedAt: Date;
      email: string;
      password: string;
  }
{/* 
  <TableContainer>
      <Table className={classes.table} aria-label="simple table"style={{backgroundColor: 'lightslategrey'}}>
        <TableHead >
          <TableRow>
    {headers.map(header =>  <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'monospace', fontSize: '30px'}}>{header}</TableCell>)}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data != undefined && data.sort((a, b) => a.id - b.id ).map((row: any , index: any) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" style={{color: 'white', fontFamily: 'monospace', fontSize: '25px'}}>
                {row.artist}
              </TableCell>

              <TableCell component='th' scope='row' style={{color: 'white', fontFamily: 'cursive', fontSize: '25px'}}>{editModeActive && rowId === row.id ? <TextField id="outlined-basic" label="Write a Review" variant="outlined"  value={dataText} onChange={(e) => setDataText(e.target.value) } /> : row.text}</TableCell>

          <TableCell component='th' scope='row'> {editModeActive && rowId === row.id ? <Rating  name={`${Math.random()*10}`} value={dataRating} onChange={(e, newValue) => setDataRating(newValue)} /> :  <Rating name={`${Math.random()*10}`} value={row.rating} readOnly  /> } </TableCell>

              <TableCell component='th' scope='row'> {editModeActive && rowId == row.id ? <div>
               <Button variant='contained' color='primary' startIcon={<SaveIcon />} onClick={() => Edit(row)}>Save Changes</Button>
               <Button variant='contained' color='secondary' onClick={() => setEditModeActive(false)}>Cancel</Button>  </div> :
              <div>

             <Button variant='contained' color='primary' onClick={() => ToggleEditMode(row)}>Edit</Button>
              <Button variant='contained' color='secondary' startIcon={<DeleteIcon />} onClick={() => Delete(row.id)}>Delete</Button>

          </div> }
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

    
{/* {this.state.eventData.map((events: AdminResponseObject, index: any) => {
  return (
    <p>{events.artist}</p>
  )
} )} */}



          {/* <TableCell component='th' scope='row'> {editModeActive && rowId === row.id ? <Rating  name={`${Math.random()*10}`} value={dataRating} onChange={(e, newValue) => setDataRating(newValue)} /> :  <Rating name={`${Math.random()*10}`} value={row.rating} readOnly  /> } </TableCell> */}