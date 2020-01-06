import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type="text"></input>
//         </div>
//     )
// }

//we need an arrow functional component here to use forward ref

const FRInput = React.forwardRef((props, ref) => {
    return (
                <div>
                    <input type="text" ref={ref}></input>
                </div>
            )
}) 
export default FRInput

