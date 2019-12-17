import React from 'react';

const WithoutJSX = () => {
    return React.createElement(
        'div',
        {id:'main', className:'test'}, // this 2nd property allows us to add id,class etc
        React.createElement('h1', null, 'This renders without JSX')
    )
}

export default WithoutJSX;