import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TrackList } from './MusicInterface';

export interface MusicTableProps {
    token : string;
    trackList : TrackList;
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
    const [data, setData] = React.useState('');
    const [dataText, setDataText] = React.useState('');
    const [dataRating, setDataRating] = React.useState<number | null > (2.5)


    const handleSubmit = () => {
        fetch(`http://localhost:3001/music`, {
            method: 'GET',
            body: JSON.stringify({
                artist: props.trackList.track.artist_name,
                text: dataText,
                rating: dataRating,
            }),
            headers: new Headers({
                'Content-Type' : 'application/json',
                Authorization : props.token !== null ? props.token : '',
            }),
        })
        .then((res) => res.json())
        .then((json) =>{
            console.log(json);
        })
    }

    React.useEffect(() => {
       fetch(`http:localhost:3001/music/`, {
         method: 'GET', 
         body: JSON.stringify({
           artist: props.trackList.track.artist_name,
           text: dataText,
           rating: dataRating,
         }),
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
    }, [])


    // function Edit(){

    // }

    // function Delete(){

    // }
  
   



    return ( 
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
    {headers.map(header =>  <TableCell>{header}</TableCell>)}
           
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {props.data.map((row: any , index: any) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.artist}
              </TableCell>
              <TableCell align="right">{row.text}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right"> Edit and Delete Buttons Here</TableCell>// Buttons

            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
     );

          }
export default MusicTable;