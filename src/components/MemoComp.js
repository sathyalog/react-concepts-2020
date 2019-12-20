import React from 'react'

function MemoComp(props) {
    console.log('Memo Component Renders')
    return (
        <div>
            {props.name}
        </div>
    )
}

export default React.memo(MemoComp);
