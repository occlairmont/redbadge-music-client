import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
// import { TrackList } from './MusicInterface';

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
      minWidth: 250,
    },
  });
// create a function that will fetch all the data DONE
  // UseEffect that will run a fetch all function. DONE
  // useState that will hold the fetched data (data, setData) DONE
  // the const data needs to go away DONE
  // once fetch is finished you will need to store that in setData DONE

  // edit function


  // delete function


  const headers=['Artist', 'Review Notes', 'Star Rating', 'edit/delete']
//   const data=[{artist: 'Lady Gaga', rating: '2.5', text: 'yfgyuegfw'}, {artist: 'Lady Gaga', rating: '2.5', text: 'yfgyuegfw'}, {artist: 'Lady Gaga', rating: '2.5', text: 'yfgyuegfw'}]
 
const MusicTable: React.SFC<MusicTableProps> = (props: MusicTableProps) => {
    const classes = useStyles();
    const [data, setData] = React.useState<MusicData[]>();
    const [editModeActive, setEditModeActive] = React.useState(false); 
    const [dataText, setDataText] = React.useState('');
    const [dataRating, setDataRating] = React.useState<number | null > (2.5)
    const [rowId, setRowId] =React.useState(0);


    const handleSubmit = () => {
        fetch(`http://localhost:3001/music`, {
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
      fetch(`http://localhost:3001/music/`, {
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
      fetch(`http://localhost:3001/music/${row.id}`, {
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
      //conduct the fetch that will make it an edit
      //method: PUT
     //After Edit Complete do the following
     //change editActive to false
     //Tablerefresh
    


    function Delete(id: number){
      fetch(`http://localhost:3001/music/${id}`, {
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
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
    {headers.map(header =>  <TableCell>{header}</TableCell>)}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data != undefined && data.sort((a, b) => a.id - b.id ).map((row: any , index: any) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.artist}
              </TableCell>
              <TableCell align="right">{editModeActive && rowId === row.id ? <TextField id="outlined-basic" label="Write a Review" variant="outlined" value={dataText} onChange={(e) => setDataText(e.target.value) } /> : row.text}</TableCell>
          <TableCell align="right"> {editModeActive && rowId === row.id ? <Rating  name={`${Math.random()*10}`} value={dataRating} onChange={(e, newValue) => setDataRating(newValue)} /> :  <Rating name={`${Math.random()*10}`} value={row.rating} readOnly  /> } </TableCell>
              <TableCell align="right"> {editModeActive && rowId == row.id ? <div> <Button onClick={() => Edit(row)}>Submit Change</Button> <Button onClick={() => setEditModeActive(false)}>Cancel</Button>  </div> :
              <div>
              <Button onClick={() => Delete(row.id)}>Delete</Button>
             <Button onClick={() => ToggleEditMode(row)}>Edit</Button>
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