import React from 'react';

function Students(props) {
    console.log(props)
    return (
        <div>
            
           <h1>Hello {props.data}</h1>
            
        </div>
    );
}

export default Students;