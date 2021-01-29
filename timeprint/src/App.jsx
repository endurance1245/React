import React, { useState } from 'react';

const App=() =>{
    let newTime=new Date().toLocaleTimeString()
    const[currenttime,setcurrenttime]=useState(newTime);

    const updateTime=() =>{
        newTime=new Date().toLocaleTimeString()
        setcurrenttime(newTime);
    }
    return(
        <>
            <h1> {currenttime} </h1>
            <button onClick={updateTime}>Get Time</button>
        </>
    );
}
export default App;