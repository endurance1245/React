import React, { useState } from "react";
const App = () =>{
    const [name, setName]=useState();
    const [myfullname, setfullname]=useState();

    const inputevent=(event) =>{
        setName(event.target.value);
    }

    const onSubmit= ()=>{
        setfullname(name)
    }
    return(
    <>
        <div>
            <h1> Hello {myfullname}</h1>
            <input type='text' 
            placeholder="Enter your name"
            onChange={inputevent}
            value={name}
            />
            <button type="submit" onClick={onSubmit}> Click Me</button>
        </div>
    </>
    )
}
export default App;