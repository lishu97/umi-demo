import request from '../utils/request';

export const namespace = 'workPlatform';

export default {
    namespace,
    // 初始属性
    state: {
        menuList: []
    },

    subscriptions: {},

    // 异步修改全局状态的方法放这里
    effects: {
        // 定义异步方法
        *getMenuList({payload}, sagaEffects) {
            const { call, put } = sagaEffects;

            // 执行请求
            let res = yield call(request, { 
                method: 'GET',
                url: "/workPlatform/menuList", 
                body: payload
            });

            // put函数可以分发一个action,类似于dispatch
            yield put({
                type: "changeMenuList",
                payload: res.data,
            });
        }
    },

    reducers: {
        // state: 该命名空间的全部数据
        // result: effets的异步调用中put函数传入的参数
        changeMenuList(state, result) {
        // changeMenuList(state, { payload }) {
            const { payload } = result;
            // 拉取后台数据
            if (Array.isArray(payload)) {
                // 返回更新后的state对象
                return {
                    ...state,
                    menuList: payload
                }
            }
            return {
                ...state,
                menuList: [...state.menuList, payload]
            }
        }
    },
}