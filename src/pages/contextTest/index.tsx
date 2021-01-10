import React, { Component } from 'react'
import Orther from './Orther'
import { connect } from 'dva';
import {MyContext} from './context'

class First extends Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.dispatch({
            type: 'mock/getMock',
            payload: {a: '111'},
            cb: data => {}
        })
    }

    render() {
        const { data } = this.props
        return (
            <MyContext.Provider value={data}>
                  <Orther />
            </MyContext.Provider>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.mock.data
    }
}
export default connect(mapStateToProps)(First)

