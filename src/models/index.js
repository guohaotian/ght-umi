import * as mock from '@/services';

export default {
    namespace: 'mock',
    state: {
        data: ''
    },
    effects: {
        * getMock({ payload: params, cb }, { call, put, select }) {   //dispatch请求的方法
            const { data } = yield call(mock.getMock, params);  //call,请求services里面的接口以及传参，可继续往后面加参数，跟JavaScript的call一样
            cb(data)   
            yield put({
                type: 'getMockSuccess',
                payload: data
            })                          
          },
    },
    reducers: {
        getMockSuccess(state, {payload}) {
            return { ...state, data: payload }; 
        }
    }
    
}