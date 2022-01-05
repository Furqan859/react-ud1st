import React from 'react';

function SubChild(props) {
    const xyz = "subchild";
    return (
        <div>
            <button onClick={()=>props.item(xyz)}>Click Me</button>
        </div>
    );
}

export default SubChild;