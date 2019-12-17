import React, {Component} from 'react';

class Greeting extends Component {
    render() {
        return (
            <div>
                <span>{this.props.children}</span>
                <h2> This is class component, Mr.{this.props.name}</h2>
            </div>
        )
    }
}

export default Greeting;