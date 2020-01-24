import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name:''
        }
    }

    clickCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) { // comment this line and notice on entering input will be logged in console all the time. We need to update document tile only when count value changes in state.
            console.log('Updating document title');
            document.title = `You clicked ${this.state.count} times`;
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                <button onClick={() => this.clickCounter()}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
