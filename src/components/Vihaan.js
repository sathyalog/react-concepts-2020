import React, { Component } from 'react'
import {AssetConsumer} from './context';

class Vihaan extends Component {
    render() {
        return (
            <div>
                Hey I am Grand Child of Chandra. I can directly get my GrandFather(Chandra) Assets without my Father(Sathya) help.
                <AssetConsumer>
                    {
                        asset => {
                            return <div>Here is my {asset}</div>
                        }
                    }
                </AssetConsumer>
            </div>
        )
    }
}

export default Vihaan

