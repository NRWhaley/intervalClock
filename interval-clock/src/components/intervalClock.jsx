import React, { useEffect, useState } from 'react';

const  IntervalClock = () => {

    const [active, setActive] = useState(false)
    const [time, setTime] = useState(10)

   

   function toggle(){
        setActive(!active)
    }

    useEffect(() => {
        let interval = null;
        if (active) {
            interval = setInterval(() => {
                setTime(time => time - 1)
            }, 1000)

        } else if (!active && time !== 0){
            clearInterval(interval)
        }
        
        return () => clearInterval(interval)
    }, [active, time])

        if(time <= 0){
            return (
                <div>Time's up!</div>
            )
        }
    
        

        return (

            <div>
                <h1>{time}</h1>
                <button onClick={toggle}>Start</button>
                <h2>{active.toString()}</h2>
            </div>
        );
    }

 
export default IntervalClock;