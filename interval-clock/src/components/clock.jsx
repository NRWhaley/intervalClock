import React, { Component } from 'react';

class Clock extends Component {
    state = { 
        timer : 0
     } 
    render() { 
        return (

            <div><h1>{this.state.timer}</h1></div>
        );
    }
}
 
export default Clock;