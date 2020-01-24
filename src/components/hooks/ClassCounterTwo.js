import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    clickCounter = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }

    increment3 = () => {
        this.clickCounter();
        this.clickCounter();
        this.clickCounter();
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.increment3()}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
