import { message } from 'antd';


export default (()=>{
    let globalRequestCount = 0;
    let hideLoading = null;

    /**
     * 发起fetch请求,返回一个promise
     *
     * @param {object} options fetch的options参数,额外包含url属性
     * @return {object} 包含后台返回数据或者Error对象
     */
    return async function request(options) {
        // 满足条件时,打开全局loading
        globalRequestCount++;
        if(!hideLoading) {
            hideLoading = message.loading('加载中...', 0)
        }

        // 处理fetch的options
        let {url, method = 'GET', body} = options;
        delete options.url;
        options.method = method.toUpperCase()
        if(method === 'GET') {
            if(body && body.__proto__.toString() === '[object Object]') {
                let isFirstParams = true
                for (const key in body) {
                    if (body.hasOwnProperty(key)) {
                        if(isFirstParams) {
                            isFirstParams = false;
                            url = `${url}?${key}=${body[key]}`
                        } else {
                            url = `${url}&${key}=${body[key]}`
                        }
                    }
                }
            }
            delete options.body;
        }

        const response = await fetch(url, options);
        checkStatus(response);

        // 满足条件时,关闭全局loading
        if(--globalRequestCount === 0) {
            hideLoading()
            hideLoading = null;
        }

        return await response.json();
    }
})()

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}