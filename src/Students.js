import React from 'react';

function Students(props) {
    console.log(props)
    return (
        <div style={{ backgroundColor : 'skyblue', paddingLeft:'45%' , margin:50 }}>
            <h2>{props.name}</h2>
            <h2>{props.email}</h2>
            <h3>{props.other.mobile}</h3>
            <h3>{props.other.adress}</h3>
            
        </div>
    );
}

export default Students;