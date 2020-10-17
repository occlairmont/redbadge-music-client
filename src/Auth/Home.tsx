
 import React, {Component} from "react";

export interface HomeProps {
    // setToken: any;
    // updateToken: (token: string) => void;
    token: string | null;
    
  }

  export interface HomeState {}

class Home extends Component<HomeProps,HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state ={};
        }
    

    render() {
        return (
<div>
    <h1>You have successfully logged in!</h1>
</div>
        )
    }
}

    export default Home;