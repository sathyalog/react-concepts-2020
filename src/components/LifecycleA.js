import React, { Component } from 'react'
import LifeCycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sathya'
        }
        console.log('LifeCycleA constructor called')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleA getDerivedStateFromProps called')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount called')
    }
    
    render() {
        console.log('LifeCycleA render called')
        return (
            <div>
                LifeCycle A
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifecycleA
