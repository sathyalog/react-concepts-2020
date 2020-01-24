import React, {useState, useEffect} from 'react'

function HooksCounter() {
    const [count, setCount] = useState(0); // 0 is the default value for first render. 0 will not be used for re-render, setCount will be used for re-render
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('Updating document title')
        document.title = `You clicked ${count} times`;
    },[count]) // second parameter [count] helps to avoid useEffect to be called when input value enters and only gets executed when count changes
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HooksCounter
