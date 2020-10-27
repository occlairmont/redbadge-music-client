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

  

    render() { 
        return ( 
        <div>
            {/* <Button onClick={()=>{this.deleteEvents()}}>Delete</Button> */}
        </div> );
    }
}
 
export default EventDelete;