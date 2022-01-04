import React from 'react';

function User(props) {
    return (
        <div>
            <span>{props.item.name}</span>
            <span>{props.item.contact}</span>
            <span>{props.item.address}</span>
        </div>
    );
}

export default User;