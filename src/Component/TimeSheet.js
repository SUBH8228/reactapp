import React, { Component } from 'react';

export default class TimeSheet extends Component {
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            timer:'00:00:00'
        }
    }
    render() {
        const UpdatedTime = () => {
            let time = new Date().toLocaleTimeString();
            this.setState({time:time});
        }
        setInterval(UpdatedTime,1000);
        return (
            <>
            { this.state.time }
            </>
        );
    }
}

export class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer:'00:00:00'
        }
    }
    render() {        
        const StartTimer = () =>{
            this.setState({timer:'00:00:01'});
        }
        if(this.props.timenow === 'start'){
            StartTimer();
        }
        return (
            <>
            { this.state.timer }
            </>
        );
    }
}