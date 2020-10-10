import userEvent from '@testing-library/user-event';
import React from 'react';
import EventDisplay from './EventDisplay';
import {EventResponse, UserEvents} from './EventInterface';

export interface EventMainProps {
    // eventsURL: string;
    token: string | null;
}
 
export interface EventMainState { 
    eventData: UserEvents[] | undefined;  
}
 
class EventMain extends React.Component<EventMainProps, EventMainState> {
    constructor(props: EventMainProps) {
        super(props);
        this.state = { 
            eventData: []
        };
    }

    componentDidMount(){
        fetch('http://localhost:3001/events/all', {
          headers: new Headers({
              "Content-Type": "application/json",
              "Authorization": this.props.token !== null ? this.props.token : ""
          }),
        })
          .then((res)=>res.json())
          .then((json: UserEvents[]) => {
              console.log(json);
              this.setState({
                  eventData: json,
              })
          });
      };
          
    render() { 
        return ( 
        <div>
           {this.state.eventData?.map((userEvent:UserEvents, index: number)=><EventDisplay userEvent={userEvent} key=
           {index}/>)}
        </div> 
        );
    }
}
 
export default EventMain;