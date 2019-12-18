import React, { Component } from 'react'

class ClickHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // Scenario 3: Do binding in constructor
        this.clickHandler = this.clickHandler.bind(this);
    }
    // Scenario 1 & 2:Using Binding and Arrow Functions, 3rd Scenario
    clickHandler()
    {
        this.setState({
            message: 'GoodBye!!'
        })
    } 
    
    // Scenario 4: Write click handler as an arrow function
    ArrowClickHandler = () => {
        this.setState({
            message: 'GoodBye!!'
        })
    }
    
    render() {
        return (
            <div>
                We can handle binding events in 4 ways.<br/><br/>
                Message: {this.state.message} <br/>
                1.<button onClick={this.clickHandler.bind(this)}>Using Binding</button><br/>
                2.<button onClick={() => this.clickHandler()}>Using Arrow Functions</button> <br/>
                3.<button onClick={this.clickHandler}>Do binding in constructor</button><br/>
                4.<button onClick={this.ArrowClickHandler}>ClickHandler as an arrow function</button><br/>
            </div>
        )
    }
}

export default ClickHandler
