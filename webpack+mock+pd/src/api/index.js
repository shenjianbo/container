import Axios from 'axios';
import qs from 'qs';
const env = process.env.NODE_ENV;
if(env === 'production') {
    Axios.defaults.timeout = 10000;
    // 设置开发、生产环境请求默认地址
    Axios.defaults.baseURL = 'http://localhost:3000';
    // 响应拦截
    Axios.interceptors.response.use(
        response => {
            if(response.status === 200) {
                if(response.data.status === 302) {
                    window.location.href = '/';
                }
                return Promise.resolve(response.data);
            }
            else {
                return Promise.reject(response);
            }
        },
        error => {
            const status = error.response.status;
            switch(+status) {
                case 404: alert('页面未找到');
                break;
            }
        }
    )


    // 请求拦截
    Axios.interceptors.request.use(request => {
        if(request.method !== 'post' && request.method !== 'get') {
            alert('请求方式错误')
        }
        else {
            return Promise.resolve(request);
        }
    })
}

function post(url, params) {
    return new Promise((resolve, reject) => {
        Axios.post(url, qs.stringify(params))
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
}

function get(url, params) {
    return new Promise((resolve, reject) => {
        Axios.get(url, {
            params
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
}

export {
    post,
    get
}