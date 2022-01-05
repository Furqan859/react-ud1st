import React from 'react';
import SubChild from './SubChild';

function Child(props) {
    const data ="Furqan Rasool" 
    return (
        <div>
           <SubChild item={props.name} />
           <button onClick={()=>props.name(data)}>hlo</button>
        </div>
    );
}

export default Child;