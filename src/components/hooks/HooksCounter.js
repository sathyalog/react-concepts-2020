import React, {useState} from 'react'

function HooksCounter() {
    const [count, setCount] = useState(0); // 0 is the default value for first render. 0 will not be used for re-render, setCount will be used for re-render
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HooksCounter
