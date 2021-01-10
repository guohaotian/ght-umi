import React, {Component} from 'react'
import {MyContext} from './context'
class Orther extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>{this.context}</div>
        )
    }
}
Orther.contextType = MyContext
export default Orther