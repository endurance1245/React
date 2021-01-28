import React, { useState } from 'react';
const App=() => {

    const[count, setCount]=useState(5);

    const IncNum =()=> 
    {
        setCount(count+5);
        //console.log('clicked ' + count++);
    }
    return(
    <>
        <h1> {count} </h1>
        <button onClick={IncNum}> Click Me </button>
    </>
    )}
export default App;