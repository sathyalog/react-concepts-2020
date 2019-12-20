import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sathya'
        }
        console.log('LifeCycleB constructor called')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleB getDerivedStateFromProps called')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount called')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifeCycleB render called')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
