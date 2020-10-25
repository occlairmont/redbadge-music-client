  import React from "react";

export interface EventEditProps {
    token: string | null;
    fetchEvent(): void;
}
 
export interface EventEditState {
    
}
 
class EventEdit extends React.Component<EventEditProps, EventEditState> {
    constructor(props: EventEditProps) {
        super(props);
        this.state = { 
              };
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default EventEdit;