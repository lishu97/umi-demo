import request from '../utils/request';
export const namespace = 'list';

export default {
    namespace,
    state: {
        peopleList: []
    },

    subscriptions: {},

    effects: {
        *getPeopleList({ payload }, { call, put }) {
            let res = yield call(request, {
                method: 'POST',
                url: "/list/peopleList",
                body: payload
            });

            yield put({
                type: "changePeopleList",
                payload: res.data,
            });
        }
    },

    reducers: {
        changePeopleList(state, { payload }) {
            return {
                ...state,
                peopleList: payload
            }
        }
    },
}