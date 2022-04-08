import React, { Component, useEffect, useState } from 'react';

function Clock(){

    const [active, setActive] = useState(false)
    const [time, setTime] = useState(10)

    //work on useEffect and setInterval integration
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(time--)
        }, 1000);
        return () => clearTimeout(timer)
    }, [])

        if(time <= 0){
            return (
                <div>Time's up!</div>
            )
        }
    
        

        return (

            <div>
                <h1>{time}</h1>
                <button onClick={() => setActive(!active)}>Start</button>
                <h2>{active.toString()}</h2>
            </div>
        );
    }

 
export default Clock;