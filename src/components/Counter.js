import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment5() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count); // setState is asynchronous and hence need callback to see accurate values
        // });
        // console.log(this.state.count);
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    
    render() {
        return (
            <div>
                counter: {this.state.count}
                <button onClick={() => this.increment5()}>Increment</button>
            </div>
        )
    }
}

export default Counter
