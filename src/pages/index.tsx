import React, { Component } from 'react'
import { Button } from 'antd';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { connect } from 'dva';

class Layout extends Component {
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
            <ProLayout layout='mix'>
                <PageContainer
                extra={[
                    <Button key="3">Operating</Button>,
                    <Button key="2">Operating</Button>,
                    <Button key="1" type="primary">
                    Main Operating
                    </Button>,
                ]}
                footer={[<Button key='4' type="primary">submit</Button>]}
                >
                </PageContainer>
            </ProLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.mock.data
    }
}
export default connect(mapStateToProps)(Layout)

