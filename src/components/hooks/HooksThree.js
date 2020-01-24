import React, {useState} from 'react'

function HooksThree() {
    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <input type="text" value={name.firstName} 
                onChange={(e) => setName({...name, firstName:e.target.value})} /><br/>
            <input type="text" value={name.lastName} 
                onChange={(e) => setName({...name,lastName:e.target.value})}/><br/>
            <span>Your first name is - {name.firstName}</span><br/>
            <span>Your last name is - {name.lastName}</span><br/>
            <span>{JSON.stringify(name)}</span><br/><br/>
            Note: Please remove `...name` in line 8 and 10 and see the output to understand setName will not merge other values in object.
        </div>
    )
}

export default HooksThree
