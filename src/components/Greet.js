import React from 'react';

const Greet = (props) => {
    return (
        <div>
            <span>{props.children}</span>
            <h1>Welcome {props.name} alias {props.nickname}</h1>
        </div>
        )
}

export default Greet;