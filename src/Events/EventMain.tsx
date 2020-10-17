import React from 'react';
import EventDisplay from './EventDisplay';
import {UserEvents} from './EventInterface';

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

    fetchEvents(){
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
    }
    
    componentDidMount(){
        this.fetchEvents();
    }; 

    render() { 
        return ( 
        <div>
           {/* {this.state.eventData !== undefined ? <EventCreate token={this.props.token !== null ? this.props.token : ""} userEvent={this.state.eventData}/> : <></>} */}
           {/* {this.state.eventData?.map((userEvent:UserEvents, index: number)=><EventDisplay userEvent={userEvent} key={index}/>)} */} 
           {this.state.eventData !== undefined ? <EventDisplay userEvent={this.state.eventData} key={2}/> : <></>}
        </div> 
        );
    }
}
 
export default EventMain;