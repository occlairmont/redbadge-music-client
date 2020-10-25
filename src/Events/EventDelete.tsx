import React from "react";
import { Button } from "@material-ui/core";

export interface EventDeleteProps {
    // token: string | null;
    // fetchEvents(): void;
}
 
// export interface EventDeleteState {
    
// }
 
class EventDelete extends React.Component<EventDeleteProps> {
    constructor(props: EventDeleteProps) {
        super(props);
        this.state = {  };
    }

    // deleteEvents(){
    //     fetch(`http://localhost:3001/events/delete/event.id`,{
    //         method: "DELETE",
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //             "Authorization" : this.props.token !== null ? this.props.token : "",
    //         }),
    //     })
    //     .then(()=> this.props.fetchEvents())
    // };

    render() { 
        return ( 
        <div>
            {/* <Button onClick={()=>{this.deleteEvents()}}>Delete</Button> */}
        </div> );
    }
}
 
export default EventDelete;