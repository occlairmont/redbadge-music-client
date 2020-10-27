import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import APIURL from '../helpers/environment';

export interface MusicTableProps {
    token : string;
}

export interface MusicData {
  artist : string;
  text : string;
  rating : number; 
  id : number; 
}


const useStyles = makeStyles({
  
    table: {
      // minWidth: 350,
      maxWidth: 1200,
      border: '5px solid black',
      marginLeft: 350,
      marginTop: 100,
      height: 300,
      alignItems: 'center',
    },
    // palette: {
    //   primary: {
    //     light: '#757ce8',
    //   main: '#3f50b5',
    //   dark: '#002884',
    //   contrastText: '#fff',
    //   }
    // }
  });


  const headers=['Artist', 'Review Notes', 'Star Rating', 'edit/delete']

 
const MusicTable: React.SFC<MusicTableProps> = (props: MusicTableProps) => {
    const classes = useStyles();
    const [data, setData] = React.useState<MusicData[]>();
    const [editModeActive, setEditModeActive] = React.useState(false); 
    const [dataText, setDataText] = React.useState('');
    const [dataRating, setDataRating] = React.useState<number | null > (2.5)
    const [rowId, setRowId] =React.useState(0);


    const handleSubmit = () => {
        fetch(`{APIURL}/music`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                Authorization : props.token !== null ? props.token : '',
            }),
        })
        .then((res) => res.json())
        .then((json) =>{
            console.log(json);
            setData(json);
        })
    }
    function fetchAll(){
      fetch(`${APIURL}/music/`, {
         method: 'GET', 
         headers: new Headers({
           'Content-Type' : 'application/json',
           Authorization : props.token !== null ? props.token : '',
         })
       })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
        setData(data)
       })
    }


    React.useEffect(() => {
       fetchAll()
    }, [])


    function Edit(row: any){
      fetch(`${APIURL}/music/${row.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            music: {
            song: row.song,
            artist: row.artist,
            album: row.album,
            text: dataText,
            rating: dataRating,
            }
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: props.token !== null ? props.token : '',
        }),
    })
    .then((res) => res.json())
    .then((music) => {
        console.log(music);
        setEditModeActive(false);
        fetchAll();
    })}
     


    function Delete(id: number){
      fetch(`{APIURL}/music/${id}`, {
         method: 'DELETE', 
         headers: new Headers({
           'Content-Type' : 'application/json',
           Authorization : props.token !== null ? props.token : '',
         })
       })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
        fetchAll();
       })
    }
  
   function ToggleEditMode(row : any) {
     setDataText(row.text);
     setDataRating(row.rating);
    setEditModeActive(!editModeActive);
    setRowId(row.id);
   }



    return ( 
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
    </TableContainer>
     );

          }
export default MusicTable;