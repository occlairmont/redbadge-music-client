import React from 'react';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export interface SearchProps {
    // setToken: any;
  }

export interface SearchState {
    search: string;
  }

  class Search extends React.Component<SearchProps, SearchState> {
  
    constructor(props: SearchProps) {
      super(props);
      this.state = { search: '' };
    }


    onSearch(e:any) {
        e.preventDefault();

}

render() {
    return (
     
     <>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',}}>
        {/* <Typography component="h1" variant="h5">
          Sign In
        </Typography> */}
        <form style={{width: '100%' // Fix IE 11 issue.
    }}>
          <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          id="search"
          label="Search"
          name="search"
          autoComplete="off"
          autoFocus
          type="text"
          // required
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        {/* <Button
        style={{display: 'inline'}}
            type="submit"
            // fullWidth 
            variant="contained"
            color="secondary"
            // style={{marginBottom: '0.8em'}}
            onClick={(e) => this.onSearch(e)}
          >
            Search
          </Button> */}
          </form>
          </div>
</Container>
</>
)}
}

export default Search;