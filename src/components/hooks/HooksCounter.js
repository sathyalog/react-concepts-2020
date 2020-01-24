import React, {useState, useEffect} from 'react'

function HooksCounter() {
    const [count, setCount] = useState(0); // 0 is the default value for first render. 0 will not be used for re-render, setCount will be used for re-render
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HooksCounter
