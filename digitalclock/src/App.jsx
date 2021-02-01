import React, { useState } from 'react';

const App = () => {
    let time= new Date().toLocaleTimeString();
    const [currenttime, setcurrenttime]=useState(time);
    const UpdateTime = ()=>{
        time= new Date().toLocaleTimeString();
        setcurrenttime(time);
    }
    setInterval(UpdateTime,1)
    return (
        <>
        <h1> {currenttime} </h1>
        </>
    );
}
export default App;
