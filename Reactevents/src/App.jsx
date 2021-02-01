import React, { useState } from 'react';
const App =() =>{
    const purple='#8e44ad';
    const[bg,changebg]=useState(purple);
    const[name, setName]=useState('Click Me');
    
    const bgchange =() =>{
        changebg('yellow'); 
        setName('Hi ');  
    };

    const bgchange2 =() =>{
        changebg('red'); 
        setName('Ouch ');   
    };
    return(
        <>
            <div style={{ backgroundColor : bg }}> 
            <button onMouseEnter={bgchange} onMouseLeave={bgchange2}> {name} </button>
            </div>
        </>
    );
}
export default App;