import React, {useState} from 'react'

function HooksCounter() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount); // 0 is the default value for first render. 0 will not be used for re-render, setCount will be used for re-render
    const increment3 = (prevCount) => {
        for(let i=0; i<3;i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment 1</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement 1</button>
            <button onClick={increment3}>Increment 3</button>
        </div>
    )
}

export default HooksCounter
