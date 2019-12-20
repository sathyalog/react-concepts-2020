import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sathya'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Sathya'
            })
        },2000)
    }
    
    render() {
        console.log('************Parent Component Renders*************')
        return (
            <div>
                Parent Component
                <MemoComp/>
                {/* <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
