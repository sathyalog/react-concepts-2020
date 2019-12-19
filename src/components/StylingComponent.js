import React from 'react'
import './Style.css'; //Scenario1 - Stylesheet
import myStyles from './myStyle.module.css'; // scenario3 - CSS module loading

//scenario2 - Inline styling
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function StylingComponent(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
            <h1 style={heading}>Inline Styling</h1>
            <h1 className={myStyles.error}>Module CSS loading</h1>
            <h1>Styled Components</h1>
        </div>
    )
}

export default StylingComponent
